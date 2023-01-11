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
exports.GetContributorCollectionItemsResponse = exports.GetContributorCollectionItemsRequest = exports.GetContributorCollectionItemsSecurity = exports.GetContributorCollectionItemsQueryParams = exports.GetContributorCollectionItemsSortEnum = exports.GetContributorCollectionItemsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetContributorCollectionItemsPathParams = /** @class */ (function (_super) {
    __extends(GetContributorCollectionItemsPathParams, _super);
    function GetContributorCollectionItemsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=contributor_id" }),
        __metadata("design:type", String)
    ], GetContributorCollectionItemsPathParams.prototype, "contributorId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetContributorCollectionItemsPathParams.prototype, "id", void 0);
    return GetContributorCollectionItemsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetContributorCollectionItemsPathParams = GetContributorCollectionItemsPathParams;
var GetContributorCollectionItemsSortEnum;
(function (GetContributorCollectionItemsSortEnum) {
    GetContributorCollectionItemsSortEnum["Newest"] = "newest";
    GetContributorCollectionItemsSortEnum["Oldest"] = "oldest";
})(GetContributorCollectionItemsSortEnum = exports.GetContributorCollectionItemsSortEnum || (exports.GetContributorCollectionItemsSortEnum = {}));
var GetContributorCollectionItemsQueryParams = /** @class */ (function (_super) {
    __extends(GetContributorCollectionItemsQueryParams, _super);
    function GetContributorCollectionItemsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetContributorCollectionItemsQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetContributorCollectionItemsQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetContributorCollectionItemsQueryParams.prototype, "sort", void 0);
    return GetContributorCollectionItemsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetContributorCollectionItemsQueryParams = GetContributorCollectionItemsQueryParams;
var GetContributorCollectionItemsSecurity = /** @class */ (function (_super) {
    __extends(GetContributorCollectionItemsSecurity, _super);
    function GetContributorCollectionItemsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeCustomerAccessCode)
    ], GetContributorCollectionItemsSecurity.prototype, "customerAccessCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetContributorCollectionItemsSecurity.prototype, "basic", void 0);
    return GetContributorCollectionItemsSecurity;
}(utils_1.SpeakeasyBase));
exports.GetContributorCollectionItemsSecurity = GetContributorCollectionItemsSecurity;
var GetContributorCollectionItemsRequest = /** @class */ (function (_super) {
    __extends(GetContributorCollectionItemsRequest, _super);
    function GetContributorCollectionItemsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetContributorCollectionItemsPathParams)
    ], GetContributorCollectionItemsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetContributorCollectionItemsQueryParams)
    ], GetContributorCollectionItemsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetContributorCollectionItemsSecurity)
    ], GetContributorCollectionItemsRequest.prototype, "security", void 0);
    return GetContributorCollectionItemsRequest;
}(utils_1.SpeakeasyBase));
exports.GetContributorCollectionItemsRequest = GetContributorCollectionItemsRequest;
var GetContributorCollectionItemsResponse = /** @class */ (function (_super) {
    __extends(GetContributorCollectionItemsResponse, _super);
    function GetContributorCollectionItemsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetContributorCollectionItemsResponse.prototype, "collectionItemDataList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetContributorCollectionItemsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetContributorCollectionItemsResponse.prototype, "statusCode", void 0);
    return GetContributorCollectionItemsResponse;
}(utils_1.SpeakeasyBase));
exports.GetContributorCollectionItemsResponse = GetContributorCollectionItemsResponse;
