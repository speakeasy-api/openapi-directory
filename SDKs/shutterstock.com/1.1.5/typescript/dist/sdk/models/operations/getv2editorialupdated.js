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
exports.GetV2EditorialUpdatedResponse = exports.GetV2EditorialUpdatedRequest = exports.GetV2EditorialUpdatedSecurity = exports.GetV2EditorialUpdatedQueryParams = exports.GetV2EditorialUpdatedTypeEnum = exports.GetV2EditorialUpdatedSortEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetV2EditorialUpdatedSortEnum;
(function (GetV2EditorialUpdatedSortEnum) {
    GetV2EditorialUpdatedSortEnum["Newest"] = "newest";
    GetV2EditorialUpdatedSortEnum["Oldest"] = "oldest";
})(GetV2EditorialUpdatedSortEnum = exports.GetV2EditorialUpdatedSortEnum || (exports.GetV2EditorialUpdatedSortEnum = {}));
var GetV2EditorialUpdatedTypeEnum;
(function (GetV2EditorialUpdatedTypeEnum) {
    GetV2EditorialUpdatedTypeEnum["Edit"] = "edit";
    GetV2EditorialUpdatedTypeEnum["Addition"] = "addition";
})(GetV2EditorialUpdatedTypeEnum = exports.GetV2EditorialUpdatedTypeEnum || (exports.GetV2EditorialUpdatedTypeEnum = {}));
var GetV2EditorialUpdatedQueryParams = /** @class */ (function (_super) {
    __extends(GetV2EditorialUpdatedQueryParams, _super);
    function GetV2EditorialUpdatedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], GetV2EditorialUpdatedQueryParams.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], GetV2EditorialUpdatedQueryParams.prototype, "cursor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=date_taken_end" }),
        __metadata("design:type", String)
    ], GetV2EditorialUpdatedQueryParams.prototype, "dateTakenEnd", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=date_taken_start" }),
        __metadata("design:type", String)
    ], GetV2EditorialUpdatedQueryParams.prototype, "dateTakenStart", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=date_updated_end" }),
        __metadata("design:type", Date)
    ], GetV2EditorialUpdatedQueryParams.prototype, "dateUpdatedEnd", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=date_updated_start" }),
        __metadata("design:type", Date)
    ], GetV2EditorialUpdatedQueryParams.prototype, "dateUpdatedStart", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetV2EditorialUpdatedQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetV2EditorialUpdatedQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=supplier_code" }),
        __metadata("design:type", Array)
    ], GetV2EditorialUpdatedQueryParams.prototype, "supplierCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetV2EditorialUpdatedQueryParams.prototype, "type", void 0);
    return GetV2EditorialUpdatedQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetV2EditorialUpdatedQueryParams = GetV2EditorialUpdatedQueryParams;
var GetV2EditorialUpdatedSecurity = /** @class */ (function (_super) {
    __extends(GetV2EditorialUpdatedSecurity, _super);
    function GetV2EditorialUpdatedSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetV2EditorialUpdatedSecurity.prototype, "basic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeCustomerAccessCode)
    ], GetV2EditorialUpdatedSecurity.prototype, "customerAccessCode", void 0);
    return GetV2EditorialUpdatedSecurity;
}(utils_1.SpeakeasyBase));
exports.GetV2EditorialUpdatedSecurity = GetV2EditorialUpdatedSecurity;
var GetV2EditorialUpdatedRequest = /** @class */ (function (_super) {
    __extends(GetV2EditorialUpdatedRequest, _super);
    function GetV2EditorialUpdatedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetV2EditorialUpdatedQueryParams)
    ], GetV2EditorialUpdatedRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetV2EditorialUpdatedSecurity)
    ], GetV2EditorialUpdatedRequest.prototype, "security", void 0);
    return GetV2EditorialUpdatedRequest;
}(utils_1.SpeakeasyBase));
exports.GetV2EditorialUpdatedRequest = GetV2EditorialUpdatedRequest;
var GetV2EditorialUpdatedResponse = /** @class */ (function (_super) {
    __extends(GetV2EditorialUpdatedResponse, _super);
    function GetV2EditorialUpdatedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetV2EditorialUpdatedResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.EditorialUpdatedResults)
    ], GetV2EditorialUpdatedResponse.prototype, "editorialUpdatedResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetV2EditorialUpdatedResponse.prototype, "statusCode", void 0);
    return GetV2EditorialUpdatedResponse;
}(utils_1.SpeakeasyBase));
exports.GetV2EditorialUpdatedResponse = GetV2EditorialUpdatedResponse;
