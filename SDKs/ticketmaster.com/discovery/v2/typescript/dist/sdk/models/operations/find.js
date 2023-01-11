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
exports.FindResponse = exports.FindRequest = exports.FindQueryParams = exports.FindSourceEnum = exports.FindIncludeTestEnum = exports.FindIncludeSpellcheckEnum = exports.FindIncludeLicensedContentEnum = void 0;
var utils_1 = require("../../../internal/utils");
var FindIncludeLicensedContentEnum;
(function (FindIncludeLicensedContentEnum) {
    FindIncludeLicensedContentEnum["Yes"] = "yes";
    FindIncludeLicensedContentEnum["No"] = " no";
})(FindIncludeLicensedContentEnum = exports.FindIncludeLicensedContentEnum || (exports.FindIncludeLicensedContentEnum = {}));
var FindIncludeSpellcheckEnum;
(function (FindIncludeSpellcheckEnum) {
    FindIncludeSpellcheckEnum["Yes"] = "yes";
    FindIncludeSpellcheckEnum["No"] = " no";
})(FindIncludeSpellcheckEnum = exports.FindIncludeSpellcheckEnum || (exports.FindIncludeSpellcheckEnum = {}));
var FindIncludeTestEnum;
(function (FindIncludeTestEnum) {
    FindIncludeTestEnum["Yes"] = "yes";
    FindIncludeTestEnum["No"] = " no";
    FindIncludeTestEnum["Only"] = " only";
})(FindIncludeTestEnum = exports.FindIncludeTestEnum || (exports.FindIncludeTestEnum = {}));
var FindSourceEnum;
(function (FindSourceEnum) {
    FindSourceEnum["Ticketmaster"] = "ticketmaster";
    FindSourceEnum["Universe"] = " universe";
    FindSourceEnum["Frontgate"] = " frontgate";
    FindSourceEnum["Tmr"] = " tmr";
})(FindSourceEnum = exports.FindSourceEnum || (exports.FindSourceEnum = {}));
var FindQueryParams = /** @class */ (function (_super) {
    __extends(FindQueryParams, _super);
    function FindQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=classificationId" }),
        __metadata("design:type", Array)
    ], FindQueryParams.prototype, "classificationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=classificationName" }),
        __metadata("design:type", Array)
    ], FindQueryParams.prototype, "classificationName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], FindQueryParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=includeLicensedContent" }),
        __metadata("design:type", String)
    ], FindQueryParams.prototype, "includeLicensedContent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=includeSpellcheck" }),
        __metadata("design:type", String)
    ], FindQueryParams.prototype, "includeSpellcheck", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=includeTest" }),
        __metadata("design:type", String)
    ], FindQueryParams.prototype, "includeTest", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=keyword" }),
        __metadata("design:type", String)
    ], FindQueryParams.prototype, "keyword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=locale" }),
        __metadata("design:type", String)
    ], FindQueryParams.prototype, "locale", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", String)
    ], FindQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=size" }),
        __metadata("design:type", String)
    ], FindQueryParams.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], FindQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=source" }),
        __metadata("design:type", String)
    ], FindQueryParams.prototype, "source", void 0);
    return FindQueryParams;
}(utils_1.SpeakeasyBase));
exports.FindQueryParams = FindQueryParams;
var FindRequest = /** @class */ (function (_super) {
    __extends(FindRequest, _super);
    function FindRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FindQueryParams)
    ], FindRequest.prototype, "queryParams", void 0);
    return FindRequest;
}(utils_1.SpeakeasyBase));
exports.FindRequest = FindRequest;
var FindResponse = /** @class */ (function (_super) {
    __extends(FindResponse, _super);
    function FindResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], FindResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], FindResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], FindResponse.prototype, "statusCode", void 0);
    return FindResponse;
}(utils_1.SpeakeasyBase));
exports.FindResponse = FindResponse;
