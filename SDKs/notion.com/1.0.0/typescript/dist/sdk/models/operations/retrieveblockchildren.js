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
exports.RetrieveBlockChildrenResponse = exports.RetrieveBlockChildrenRequest = exports.RetrieveBlockChildren200ApplicationJson = exports.RetrieveBlockChildren200ApplicationJsonResults = exports.RetrieveBlockChildrenQueryParams = exports.RetrieveBlockChildrenPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var RetrieveBlockChildrenPathParams = /** @class */ (function (_super) {
    __extends(RetrieveBlockChildrenPathParams, _super);
    function RetrieveBlockChildrenPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], RetrieveBlockChildrenPathParams.prototype, "id", void 0);
    return RetrieveBlockChildrenPathParams;
}(utils_1.SpeakeasyBase));
exports.RetrieveBlockChildrenPathParams = RetrieveBlockChildrenPathParams;
var RetrieveBlockChildrenQueryParams = /** @class */ (function (_super) {
    __extends(RetrieveBlockChildrenQueryParams, _super);
    function RetrieveBlockChildrenQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", String)
    ], RetrieveBlockChildrenQueryParams.prototype, "pageSize", void 0);
    return RetrieveBlockChildrenQueryParams;
}(utils_1.SpeakeasyBase));
exports.RetrieveBlockChildrenQueryParams = RetrieveBlockChildrenQueryParams;
var RetrieveBlockChildren200ApplicationJsonResults = /** @class */ (function (_super) {
    __extends(RetrieveBlockChildren200ApplicationJsonResults, _super);
    function RetrieveBlockChildren200ApplicationJsonResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_time" }),
        __metadata("design:type", String)
    ], RetrieveBlockChildren200ApplicationJsonResults.prototype, "createdTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_children" }),
        __metadata("design:type", Boolean)
    ], RetrieveBlockChildren200ApplicationJsonResults.prototype, "hasChildren", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RetrieveBlockChildren200ApplicationJsonResults.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_edited_time" }),
        __metadata("design:type", String)
    ], RetrieveBlockChildren200ApplicationJsonResults.prototype, "lastEditedTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=object" }),
        __metadata("design:type", String)
    ], RetrieveBlockChildren200ApplicationJsonResults.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RetrieveBlockChildren200ApplicationJsonResults.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unsupported" }),
        __metadata("design:type", Object)
    ], RetrieveBlockChildren200ApplicationJsonResults.prototype, "unsupported", void 0);
    return RetrieveBlockChildren200ApplicationJsonResults;
}(utils_1.SpeakeasyBase));
exports.RetrieveBlockChildren200ApplicationJsonResults = RetrieveBlockChildren200ApplicationJsonResults;
var RetrieveBlockChildren200ApplicationJson = /** @class */ (function (_super) {
    __extends(RetrieveBlockChildren200ApplicationJson, _super);
    function RetrieveBlockChildren200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_more" }),
        __metadata("design:type", Boolean)
    ], RetrieveBlockChildren200ApplicationJson.prototype, "hasMore", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_cursor" }),
        __metadata("design:type", Object)
    ], RetrieveBlockChildren200ApplicationJson.prototype, "nextCursor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=object" }),
        __metadata("design:type", String)
    ], RetrieveBlockChildren200ApplicationJson.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results", elemType: RetrieveBlockChildren200ApplicationJsonResults }),
        __metadata("design:type", Array)
    ], RetrieveBlockChildren200ApplicationJson.prototype, "results", void 0);
    return RetrieveBlockChildren200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.RetrieveBlockChildren200ApplicationJson = RetrieveBlockChildren200ApplicationJson;
var RetrieveBlockChildrenRequest = /** @class */ (function (_super) {
    __extends(RetrieveBlockChildrenRequest, _super);
    function RetrieveBlockChildrenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RetrieveBlockChildrenPathParams)
    ], RetrieveBlockChildrenRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RetrieveBlockChildrenQueryParams)
    ], RetrieveBlockChildrenRequest.prototype, "queryParams", void 0);
    return RetrieveBlockChildrenRequest;
}(utils_1.SpeakeasyBase));
exports.RetrieveBlockChildrenRequest = RetrieveBlockChildrenRequest;
var RetrieveBlockChildrenResponse = /** @class */ (function (_super) {
    __extends(RetrieveBlockChildrenResponse, _super);
    function RetrieveBlockChildrenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RetrieveBlockChildrenResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], RetrieveBlockChildrenResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RetrieveBlockChildrenResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RetrieveBlockChildren200ApplicationJson)
    ], RetrieveBlockChildrenResponse.prototype, "retrieveBlockChildren200ApplicationJSONObject", void 0);
    return RetrieveBlockChildrenResponse;
}(utils_1.SpeakeasyBase));
exports.RetrieveBlockChildrenResponse = RetrieveBlockChildrenResponse;
