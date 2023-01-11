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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUpdatedEditorialImagesResponse = exports.GetUpdatedEditorialImagesRequest = exports.GetUpdatedEditorialImagesSecurity = exports.GetUpdatedEditorialImagesQueryParams = exports.GetUpdatedEditorialImagesTypeEnum = exports.GetUpdatedEditorialImagesSortEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetUpdatedEditorialImagesSortEnum;
(function (GetUpdatedEditorialImagesSortEnum) {
    GetUpdatedEditorialImagesSortEnum["Newest"] = "newest";
    GetUpdatedEditorialImagesSortEnum["Oldest"] = "oldest";
})(GetUpdatedEditorialImagesSortEnum = exports.GetUpdatedEditorialImagesSortEnum || (exports.GetUpdatedEditorialImagesSortEnum = {}));
var GetUpdatedEditorialImagesTypeEnum;
(function (GetUpdatedEditorialImagesTypeEnum) {
    GetUpdatedEditorialImagesTypeEnum["Edit"] = "edit";
    GetUpdatedEditorialImagesTypeEnum["Addition"] = "addition";
})(GetUpdatedEditorialImagesTypeEnum = exports.GetUpdatedEditorialImagesTypeEnum || (exports.GetUpdatedEditorialImagesTypeEnum = {}));
var GetUpdatedEditorialImagesQueryParams = /** @class */ (function (_super) {
    __extends(GetUpdatedEditorialImagesQueryParams, _super);
    function GetUpdatedEditorialImagesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], GetUpdatedEditorialImagesQueryParams.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], GetUpdatedEditorialImagesQueryParams.prototype, "cursor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=date_taken_end" }),
        __metadata("design:type", String)
    ], GetUpdatedEditorialImagesQueryParams.prototype, "dateTakenEnd", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=date_taken_start" }),
        __metadata("design:type", String)
    ], GetUpdatedEditorialImagesQueryParams.prototype, "dateTakenStart", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=date_updated_end" }),
        __metadata("design:type", Date)
    ], GetUpdatedEditorialImagesQueryParams.prototype, "dateUpdatedEnd", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=date_updated_start" }),
        __metadata("design:type", Date)
    ], GetUpdatedEditorialImagesQueryParams.prototype, "dateUpdatedStart", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetUpdatedEditorialImagesQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetUpdatedEditorialImagesQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=supplier_code" }),
        __metadata("design:type", Array)
    ], GetUpdatedEditorialImagesQueryParams.prototype, "supplierCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetUpdatedEditorialImagesQueryParams.prototype, "type", void 0);
    return GetUpdatedEditorialImagesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetUpdatedEditorialImagesQueryParams = GetUpdatedEditorialImagesQueryParams;
var GetUpdatedEditorialImagesSecurity = /** @class */ (function (_super) {
    __extends(GetUpdatedEditorialImagesSecurity, _super);
    function GetUpdatedEditorialImagesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetUpdatedEditorialImagesSecurity.prototype, "basic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeCustomerAccessCode)
    ], GetUpdatedEditorialImagesSecurity.prototype, "customerAccessCode", void 0);
    return GetUpdatedEditorialImagesSecurity;
}(utils_1.SpeakeasyBase));
exports.GetUpdatedEditorialImagesSecurity = GetUpdatedEditorialImagesSecurity;
var GetUpdatedEditorialImagesRequest = /** @class */ (function (_super) {
    __extends(GetUpdatedEditorialImagesRequest, _super);
    function GetUpdatedEditorialImagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUpdatedEditorialImagesQueryParams)
    ], GetUpdatedEditorialImagesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUpdatedEditorialImagesSecurity)
    ], GetUpdatedEditorialImagesRequest.prototype, "security", void 0);
    return GetUpdatedEditorialImagesRequest;
}(utils_1.SpeakeasyBase));
exports.GetUpdatedEditorialImagesRequest = GetUpdatedEditorialImagesRequest;
var GetUpdatedEditorialImagesResponse = /** @class */ (function (_super) {
    __extends(GetUpdatedEditorialImagesResponse, _super);
    function GetUpdatedEditorialImagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetUpdatedEditorialImagesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.EditorialUpdatedResults)
    ], GetUpdatedEditorialImagesResponse.prototype, "editorialUpdatedResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetUpdatedEditorialImagesResponse.prototype, "statusCode", void 0);
    return GetUpdatedEditorialImagesResponse;
}(utils_1.SpeakeasyBase));
exports.GetUpdatedEditorialImagesResponse = GetUpdatedEditorialImagesResponse;
