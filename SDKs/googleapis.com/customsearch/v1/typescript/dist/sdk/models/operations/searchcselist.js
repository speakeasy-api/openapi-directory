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
exports.SearchCseListResponse = exports.SearchCseListRequest = exports.SearchCseListQueryParams = exports.SearchCseListSiteSearchFilterEnum = exports.SearchCseListSearchTypeEnum = exports.SearchCseListSafeEnum = exports.SearchCseListImgTypeEnum = exports.SearchCseListImgSizeEnum = exports.SearchCseListImgDominantColorEnum = exports.SearchCseListImgColorTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SearchCseListImgColorTypeEnum;
(function (SearchCseListImgColorTypeEnum) {
    SearchCseListImgColorTypeEnum["ImgColorTypeUndefined"] = "imgColorTypeUndefined";
    SearchCseListImgColorTypeEnum["Mono"] = "mono";
    SearchCseListImgColorTypeEnum["Gray"] = "gray";
    SearchCseListImgColorTypeEnum["Color"] = "color";
    SearchCseListImgColorTypeEnum["Trans"] = "trans";
})(SearchCseListImgColorTypeEnum = exports.SearchCseListImgColorTypeEnum || (exports.SearchCseListImgColorTypeEnum = {}));
var SearchCseListImgDominantColorEnum;
(function (SearchCseListImgDominantColorEnum) {
    SearchCseListImgDominantColorEnum["ImgDominantColorUndefined"] = "imgDominantColorUndefined";
    SearchCseListImgDominantColorEnum["Black"] = "black";
    SearchCseListImgDominantColorEnum["Blue"] = "blue";
    SearchCseListImgDominantColorEnum["Brown"] = "brown";
    SearchCseListImgDominantColorEnum["Gray"] = "gray";
    SearchCseListImgDominantColorEnum["Green"] = "green";
    SearchCseListImgDominantColorEnum["Orange"] = "orange";
    SearchCseListImgDominantColorEnum["Pink"] = "pink";
    SearchCseListImgDominantColorEnum["Purple"] = "purple";
    SearchCseListImgDominantColorEnum["Red"] = "red";
    SearchCseListImgDominantColorEnum["Teal"] = "teal";
    SearchCseListImgDominantColorEnum["White"] = "white";
    SearchCseListImgDominantColorEnum["Yellow"] = "yellow";
})(SearchCseListImgDominantColorEnum = exports.SearchCseListImgDominantColorEnum || (exports.SearchCseListImgDominantColorEnum = {}));
var SearchCseListImgSizeEnum;
(function (SearchCseListImgSizeEnum) {
    SearchCseListImgSizeEnum["ImgSizeUndefined"] = "imgSizeUndefined";
    SearchCseListImgSizeEnum["Huge"] = "HUGE";
    SearchCseListImgSizeEnum["Icon"] = "ICON";
    SearchCseListImgSizeEnum["Large"] = "LARGE";
    SearchCseListImgSizeEnum["Medium"] = "MEDIUM";
    SearchCseListImgSizeEnum["Small"] = "SMALL";
    SearchCseListImgSizeEnum["Xlarge"] = "XLARGE";
    SearchCseListImgSizeEnum["Xxlarge"] = "XXLARGE";
})(SearchCseListImgSizeEnum = exports.SearchCseListImgSizeEnum || (exports.SearchCseListImgSizeEnum = {}));
var SearchCseListImgTypeEnum;
(function (SearchCseListImgTypeEnum) {
    SearchCseListImgTypeEnum["ImgTypeUndefined"] = "imgTypeUndefined";
    SearchCseListImgTypeEnum["Clipart"] = "clipart";
    SearchCseListImgTypeEnum["Face"] = "face";
    SearchCseListImgTypeEnum["Lineart"] = "lineart";
    SearchCseListImgTypeEnum["Stock"] = "stock";
    SearchCseListImgTypeEnum["Photo"] = "photo";
    SearchCseListImgTypeEnum["Animated"] = "animated";
})(SearchCseListImgTypeEnum = exports.SearchCseListImgTypeEnum || (exports.SearchCseListImgTypeEnum = {}));
var SearchCseListSafeEnum;
(function (SearchCseListSafeEnum) {
    SearchCseListSafeEnum["SafeUndefined"] = "safeUndefined";
    SearchCseListSafeEnum["Active"] = "active";
    SearchCseListSafeEnum["High"] = "high";
    SearchCseListSafeEnum["Medium"] = "medium";
    SearchCseListSafeEnum["Off"] = "off";
})(SearchCseListSafeEnum = exports.SearchCseListSafeEnum || (exports.SearchCseListSafeEnum = {}));
var SearchCseListSearchTypeEnum;
(function (SearchCseListSearchTypeEnum) {
    SearchCseListSearchTypeEnum["SearchTypeUndefined"] = "searchTypeUndefined";
    SearchCseListSearchTypeEnum["Image"] = "image";
})(SearchCseListSearchTypeEnum = exports.SearchCseListSearchTypeEnum || (exports.SearchCseListSearchTypeEnum = {}));
var SearchCseListSiteSearchFilterEnum;
(function (SearchCseListSiteSearchFilterEnum) {
    SearchCseListSiteSearchFilterEnum["SiteSearchFilterUndefined"] = "siteSearchFilterUndefined";
    SearchCseListSiteSearchFilterEnum["E"] = "e";
    SearchCseListSiteSearchFilterEnum["I"] = "i";
})(SearchCseListSiteSearchFilterEnum = exports.SearchCseListSiteSearchFilterEnum || (exports.SearchCseListSiteSearchFilterEnum = {}));
var SearchCseListQueryParams = /** @class */ (function (_super) {
    __extends(SearchCseListQueryParams, _super);
    function SearchCseListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SearchCseListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SearchCseListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SearchCseListQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=c2coff" }),
        __metadata("design:type", String)
    ], SearchCseListQueryParams.prototype, "c2coff", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SearchCseListQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=cr" }),
        __metadata("design:type", String)
    ], SearchCseListQueryParams.prototype, "cr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=cx" }),
        __metadata("design:type", String)
    ], SearchCseListQueryParams.prototype, "cx", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=dateRestrict" }),
        __metadata("design:type", String)
    ], SearchCseListQueryParams.prototype, "dateRestrict", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=exactTerms" }),
        __metadata("design:type", String)
    ], SearchCseListQueryParams.prototype, "exactTerms", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=excludeTerms" }),
        __metadata("design:type", String)
    ], SearchCseListQueryParams.prototype, "excludeTerms", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SearchCseListQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fileType" }),
        __metadata("design:type", String)
    ], SearchCseListQueryParams.prototype, "fileType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], SearchCseListQueryParams.prototype, "filter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=gl" }),
        __metadata("design:type", String)
    ], SearchCseListQueryParams.prototype, "gl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=googlehost" }),
        __metadata("design:type", String)
    ], SearchCseListQueryParams.prototype, "googlehost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=highRange" }),
        __metadata("design:type", String)
    ], SearchCseListQueryParams.prototype, "highRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=hl" }),
        __metadata("design:type", String)
    ], SearchCseListQueryParams.prototype, "hl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=hq" }),
        __metadata("design:type", String)
    ], SearchCseListQueryParams.prototype, "hq", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=imgColorType" }),
        __metadata("design:type", String)
    ], SearchCseListQueryParams.prototype, "imgColorType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=imgDominantColor" }),
        __metadata("design:type", String)
    ], SearchCseListQueryParams.prototype, "imgDominantColor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=imgSize" }),
        __metadata("design:type", String)
    ], SearchCseListQueryParams.prototype, "imgSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=imgType" }),
        __metadata("design:type", String)
    ], SearchCseListQueryParams.prototype, "imgType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SearchCseListQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=linkSite" }),
        __metadata("design:type", String)
    ], SearchCseListQueryParams.prototype, "linkSite", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=lowRange" }),
        __metadata("design:type", String)
    ], SearchCseListQueryParams.prototype, "lowRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=lr" }),
        __metadata("design:type", String)
    ], SearchCseListQueryParams.prototype, "lr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=num" }),
        __metadata("design:type", Number)
    ], SearchCseListQueryParams.prototype, "num", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SearchCseListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=orTerms" }),
        __metadata("design:type", String)
    ], SearchCseListQueryParams.prototype, "orTerms", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SearchCseListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], SearchCseListQueryParams.prototype, "q", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SearchCseListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=relatedSite" }),
        __metadata("design:type", String)
    ], SearchCseListQueryParams.prototype, "relatedSite", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=rights" }),
        __metadata("design:type", String)
    ], SearchCseListQueryParams.prototype, "rights", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=safe" }),
        __metadata("design:type", String)
    ], SearchCseListQueryParams.prototype, "safe", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=searchType" }),
        __metadata("design:type", String)
    ], SearchCseListQueryParams.prototype, "searchType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=siteSearch" }),
        __metadata("design:type", String)
    ], SearchCseListQueryParams.prototype, "siteSearch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=siteSearchFilter" }),
        __metadata("design:type", String)
    ], SearchCseListQueryParams.prototype, "siteSearchFilter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], SearchCseListQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], SearchCseListQueryParams.prototype, "start", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SearchCseListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SearchCseListQueryParams.prototype, "uploadProtocol", void 0);
    return SearchCseListQueryParams;
}(utils_1.SpeakeasyBase));
exports.SearchCseListQueryParams = SearchCseListQueryParams;
var SearchCseListRequest = /** @class */ (function (_super) {
    __extends(SearchCseListRequest, _super);
    function SearchCseListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SearchCseListQueryParams)
    ], SearchCseListRequest.prototype, "queryParams", void 0);
    return SearchCseListRequest;
}(utils_1.SpeakeasyBase));
exports.SearchCseListRequest = SearchCseListRequest;
var SearchCseListResponse = /** @class */ (function (_super) {
    __extends(SearchCseListResponse, _super);
    function SearchCseListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SearchCseListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Search)
    ], SearchCseListResponse.prototype, "search", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SearchCseListResponse.prototype, "statusCode", void 0);
    return SearchCseListResponse;
}(utils_1.SpeakeasyBase));
exports.SearchCseListResponse = SearchCseListResponse;
