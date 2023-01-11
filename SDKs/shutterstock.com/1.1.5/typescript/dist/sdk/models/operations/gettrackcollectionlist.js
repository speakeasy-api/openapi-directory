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
exports.GetTrackCollectionListResponse = exports.GetTrackCollectionListRequest = exports.GetTrackCollectionListSecurity = exports.GetTrackCollectionListQueryParams = exports.GetTrackCollectionListEmbedEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetTrackCollectionListEmbedEnum;
(function (GetTrackCollectionListEmbedEnum) {
    GetTrackCollectionListEmbedEnum["ShareCode"] = "share_code";
    GetTrackCollectionListEmbedEnum["ShareUrl"] = "share_url";
})(GetTrackCollectionListEmbedEnum = exports.GetTrackCollectionListEmbedEnum || (exports.GetTrackCollectionListEmbedEnum = {}));
var GetTrackCollectionListQueryParams = /** @class */ (function (_super) {
    __extends(GetTrackCollectionListQueryParams, _super);
    function GetTrackCollectionListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=embed" }),
        __metadata("design:type", Array)
    ], GetTrackCollectionListQueryParams.prototype, "embed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetTrackCollectionListQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetTrackCollectionListQueryParams.prototype, "perPage", void 0);
    return GetTrackCollectionListQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetTrackCollectionListQueryParams = GetTrackCollectionListQueryParams;
var GetTrackCollectionListSecurity = /** @class */ (function (_super) {
    __extends(GetTrackCollectionListSecurity, _super);
    function GetTrackCollectionListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeCustomerAccessCode)
    ], GetTrackCollectionListSecurity.prototype, "customerAccessCode", void 0);
    return GetTrackCollectionListSecurity;
}(utils_1.SpeakeasyBase));
exports.GetTrackCollectionListSecurity = GetTrackCollectionListSecurity;
var GetTrackCollectionListRequest = /** @class */ (function (_super) {
    __extends(GetTrackCollectionListRequest, _super);
    function GetTrackCollectionListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTrackCollectionListQueryParams)
    ], GetTrackCollectionListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTrackCollectionListSecurity)
    ], GetTrackCollectionListRequest.prototype, "security", void 0);
    return GetTrackCollectionListRequest;
}(utils_1.SpeakeasyBase));
exports.GetTrackCollectionListRequest = GetTrackCollectionListRequest;
var GetTrackCollectionListResponse = /** @class */ (function (_super) {
    __extends(GetTrackCollectionListResponse, _super);
    function GetTrackCollectionListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetTrackCollectionListResponse.prototype, "collectionDataList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetTrackCollectionListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetTrackCollectionListResponse.prototype, "statusCode", void 0);
    return GetTrackCollectionListResponse;
}(utils_1.SpeakeasyBase));
exports.GetTrackCollectionListResponse = GetTrackCollectionListResponse;
