"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListBatchesResponseBody = exports.ListBatchesResponseBodyPaginationLink = void 0;
var utils_1 = require("../../../internal/utils");
var link_1 = require("./link");
var optionallink_1 = require("./optionallink");
var batch_1 = require("./batch");
// ListBatchesResponseBodyPaginationLink
/**
 * Helpful links to other pages of results
**/
var ListBatchesResponseBodyPaginationLink = /** @class */ (function (_super) {
    __extends(ListBatchesResponseBodyPaginationLink, _super);
    function ListBatchesResponseBodyPaginationLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", link_1.Link)
    ], ListBatchesResponseBodyPaginationLink.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", link_1.Link)
    ], ListBatchesResponseBodyPaginationLink.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", optionallink_1.OptionalLink)
    ], ListBatchesResponseBodyPaginationLink.prototype, "next", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", optionallink_1.OptionalLink)
    ], ListBatchesResponseBodyPaginationLink.prototype, "prev", void 0);
    return ListBatchesResponseBodyPaginationLink;
}(utils_1.SpeakeasyBase));
exports.ListBatchesResponseBodyPaginationLink = ListBatchesResponseBodyPaginationLink;
// ListBatchesResponseBody
/**
 * A list batch response body
**/
var ListBatchesResponseBody = /** @class */ (function (_super) {
    __extends(ListBatchesResponseBody, _super);
    function ListBatchesResponseBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=batches", elemType: batch_1.Batch }),
        __metadata("design:type", Array)
    ], ListBatchesResponseBody.prototype, "batches", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", ListBatchesResponseBodyPaginationLink)
    ], ListBatchesResponseBody.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListBatchesResponseBody.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], ListBatchesResponseBody.prototype, "pages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ListBatchesResponseBody.prototype, "total", void 0);
    return ListBatchesResponseBody;
}(utils_1.SpeakeasyBase));
exports.ListBatchesResponseBody = ListBatchesResponseBody;
