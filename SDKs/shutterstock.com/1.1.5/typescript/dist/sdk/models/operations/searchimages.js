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
exports.SearchImagesResponse = exports.SearchImagesRequest = exports.SearchImagesSecurity = exports.SearchImagesQueryParams = exports.SearchImagesViewEnum = exports.SearchImagesSortEnum = exports.SearchImagesPeopleGenderEnum = exports.SearchImagesPeopleEthnicityEnum = exports.SearchImagesPeopleAgeEnum = exports.SearchImagesOrientationEnum = exports.SearchImagesLicenseEnum = exports.SearchImagesImageTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SearchImagesImageTypeEnum;
(function (SearchImagesImageTypeEnum) {
    SearchImagesImageTypeEnum["Photo"] = "photo";
    SearchImagesImageTypeEnum["Illustration"] = "illustration";
    SearchImagesImageTypeEnum["Vector"] = "vector";
})(SearchImagesImageTypeEnum = exports.SearchImagesImageTypeEnum || (exports.SearchImagesImageTypeEnum = {}));
var SearchImagesLicenseEnum;
(function (SearchImagesLicenseEnum) {
    SearchImagesLicenseEnum["Commercial"] = "commercial";
    SearchImagesLicenseEnum["Editorial"] = "editorial";
    SearchImagesLicenseEnum["Enhanced"] = "enhanced";
})(SearchImagesLicenseEnum = exports.SearchImagesLicenseEnum || (exports.SearchImagesLicenseEnum = {}));
var SearchImagesOrientationEnum;
(function (SearchImagesOrientationEnum) {
    SearchImagesOrientationEnum["Horizontal"] = "horizontal";
    SearchImagesOrientationEnum["Vertical"] = "vertical";
})(SearchImagesOrientationEnum = exports.SearchImagesOrientationEnum || (exports.SearchImagesOrientationEnum = {}));
var SearchImagesPeopleAgeEnum;
(function (SearchImagesPeopleAgeEnum) {
    SearchImagesPeopleAgeEnum["Infants"] = "infants";
    SearchImagesPeopleAgeEnum["Children"] = "children";
    SearchImagesPeopleAgeEnum["Teenagers"] = "teenagers";
    SearchImagesPeopleAgeEnum["Twentys"] = "20s";
    SearchImagesPeopleAgeEnum["Thirtys"] = "30s";
    SearchImagesPeopleAgeEnum["Fortys"] = "40s";
    SearchImagesPeopleAgeEnum["Fiftys"] = "50s";
    SearchImagesPeopleAgeEnum["Sixtys"] = "60s";
    SearchImagesPeopleAgeEnum["Older"] = "older";
})(SearchImagesPeopleAgeEnum = exports.SearchImagesPeopleAgeEnum || (exports.SearchImagesPeopleAgeEnum = {}));
var SearchImagesPeopleEthnicityEnum;
(function (SearchImagesPeopleEthnicityEnum) {
    SearchImagesPeopleEthnicityEnum["African"] = "african";
    SearchImagesPeopleEthnicityEnum["AfricanAmerican"] = "african_american";
    SearchImagesPeopleEthnicityEnum["Black"] = "black";
    SearchImagesPeopleEthnicityEnum["Brazilian"] = "brazilian";
    SearchImagesPeopleEthnicityEnum["Chinese"] = "chinese";
    SearchImagesPeopleEthnicityEnum["Caucasian"] = "caucasian";
    SearchImagesPeopleEthnicityEnum["EastAsian"] = "east_asian";
    SearchImagesPeopleEthnicityEnum["Hispanic"] = "hispanic";
    SearchImagesPeopleEthnicityEnum["Japanese"] = "japanese";
    SearchImagesPeopleEthnicityEnum["MiddleEastern"] = "middle_eastern";
    SearchImagesPeopleEthnicityEnum["NativeAmerican"] = "native_american";
    SearchImagesPeopleEthnicityEnum["PacificIslander"] = "pacific_islander";
    SearchImagesPeopleEthnicityEnum["SouthAsian"] = "south_asian";
    SearchImagesPeopleEthnicityEnum["SoutheastAsian"] = "southeast_asian";
    SearchImagesPeopleEthnicityEnum["Other"] = "other";
})(SearchImagesPeopleEthnicityEnum = exports.SearchImagesPeopleEthnicityEnum || (exports.SearchImagesPeopleEthnicityEnum = {}));
var SearchImagesPeopleGenderEnum;
(function (SearchImagesPeopleGenderEnum) {
    SearchImagesPeopleGenderEnum["Male"] = "male";
    SearchImagesPeopleGenderEnum["Female"] = "female";
    SearchImagesPeopleGenderEnum["Both"] = "both";
})(SearchImagesPeopleGenderEnum = exports.SearchImagesPeopleGenderEnum || (exports.SearchImagesPeopleGenderEnum = {}));
var SearchImagesSortEnum;
(function (SearchImagesSortEnum) {
    SearchImagesSortEnum["Newest"] = "newest";
    SearchImagesSortEnum["Popular"] = "popular";
    SearchImagesSortEnum["Relevance"] = "relevance";
    SearchImagesSortEnum["Random"] = "random";
})(SearchImagesSortEnum = exports.SearchImagesSortEnum || (exports.SearchImagesSortEnum = {}));
var SearchImagesViewEnum;
(function (SearchImagesViewEnum) {
    SearchImagesViewEnum["Minimal"] = "minimal";
    SearchImagesViewEnum["Full"] = "full";
})(SearchImagesViewEnum = exports.SearchImagesViewEnum || (exports.SearchImagesViewEnum = {}));
var SearchImagesQueryParams = /** @class */ (function (_super) {
    __extends(SearchImagesQueryParams, _super);
    function SearchImagesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=added_date" }),
        __metadata("design:type", Date)
    ], SearchImagesQueryParams.prototype, "addedDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=added_date_end" }),
        __metadata("design:type", Date)
    ], SearchImagesQueryParams.prototype, "addedDateEnd", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=added_date_start" }),
        __metadata("design:type", Date)
    ], SearchImagesQueryParams.prototype, "addedDateStart", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=aspect_ratio" }),
        __metadata("design:type", Number)
    ], SearchImagesQueryParams.prototype, "aspectRatio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=aspect_ratio_max" }),
        __metadata("design:type", Number)
    ], SearchImagesQueryParams.prototype, "aspectRatioMax", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=aspect_ratio_min" }),
        __metadata("design:type", Number)
    ], SearchImagesQueryParams.prototype, "aspectRatioMin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=category" }),
        __metadata("design:type", String)
    ], SearchImagesQueryParams.prototype, "category", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=color" }),
        __metadata("design:type", String)
    ], SearchImagesQueryParams.prototype, "color", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=contributor" }),
        __metadata("design:type", Array)
    ], SearchImagesQueryParams.prototype, "contributor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=contributor_country" }),
        __metadata("design:type", Object)
    ], SearchImagesQueryParams.prototype, "contributorCountry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SearchImagesQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=height" }),
        __metadata("design:type", Number)
    ], SearchImagesQueryParams.prototype, "height", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=height_from" }),
        __metadata("design:type", Number)
    ], SearchImagesQueryParams.prototype, "heightFrom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=height_to" }),
        __metadata("design:type", Number)
    ], SearchImagesQueryParams.prototype, "heightTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=image_type" }),
        __metadata("design:type", Array)
    ], SearchImagesQueryParams.prototype, "imageType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=keyword_safe_search" }),
        __metadata("design:type", Boolean)
    ], SearchImagesQueryParams.prototype, "keywordSafeSearch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=language" }),
        __metadata("design:type", String)
    ], SearchImagesQueryParams.prototype, "language", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=license" }),
        __metadata("design:type", Array)
    ], SearchImagesQueryParams.prototype, "license", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=model" }),
        __metadata("design:type", Array)
    ], SearchImagesQueryParams.prototype, "model", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=orientation" }),
        __metadata("design:type", String)
    ], SearchImagesQueryParams.prototype, "orientation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], SearchImagesQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=people_age" }),
        __metadata("design:type", String)
    ], SearchImagesQueryParams.prototype, "peopleAge", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=people_ethnicity" }),
        __metadata("design:type", Array)
    ], SearchImagesQueryParams.prototype, "peopleEthnicity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=people_gender" }),
        __metadata("design:type", String)
    ], SearchImagesQueryParams.prototype, "peopleGender", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=people_model_released" }),
        __metadata("design:type", Boolean)
    ], SearchImagesQueryParams.prototype, "peopleModelReleased", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=people_number" }),
        __metadata("design:type", Number)
    ], SearchImagesQueryParams.prototype, "peopleNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], SearchImagesQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], SearchImagesQueryParams.prototype, "query", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=region" }),
        __metadata("design:type", Object)
    ], SearchImagesQueryParams.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=safe" }),
        __metadata("design:type", Boolean)
    ], SearchImagesQueryParams.prototype, "safe", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], SearchImagesQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=spellcheck_query" }),
        __metadata("design:type", Boolean)
    ], SearchImagesQueryParams.prototype, "spellcheckQuery", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], SearchImagesQueryParams.prototype, "view", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=width" }),
        __metadata("design:type", Number)
    ], SearchImagesQueryParams.prototype, "width", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=width_from" }),
        __metadata("design:type", Number)
    ], SearchImagesQueryParams.prototype, "widthFrom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=width_to" }),
        __metadata("design:type", Number)
    ], SearchImagesQueryParams.prototype, "widthTo", void 0);
    return SearchImagesQueryParams;
}(utils_1.SpeakeasyBase));
exports.SearchImagesQueryParams = SearchImagesQueryParams;
var SearchImagesSecurity = /** @class */ (function (_super) {
    __extends(SearchImagesSecurity, _super);
    function SearchImagesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], SearchImagesSecurity.prototype, "basic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeCustomerAccessCode)
    ], SearchImagesSecurity.prototype, "customerAccessCode", void 0);
    return SearchImagesSecurity;
}(utils_1.SpeakeasyBase));
exports.SearchImagesSecurity = SearchImagesSecurity;
var SearchImagesRequest = /** @class */ (function (_super) {
    __extends(SearchImagesRequest, _super);
    function SearchImagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SearchImagesQueryParams)
    ], SearchImagesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SearchImagesSecurity)
    ], SearchImagesRequest.prototype, "security", void 0);
    return SearchImagesRequest;
}(utils_1.SpeakeasyBase));
exports.SearchImagesRequest = SearchImagesRequest;
var SearchImagesResponse = /** @class */ (function (_super) {
    __extends(SearchImagesResponse, _super);
    function SearchImagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SearchImagesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ImageSearchResults)
    ], SearchImagesResponse.prototype, "imageSearchResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SearchImagesResponse.prototype, "statusCode", void 0);
    return SearchImagesResponse;
}(utils_1.SpeakeasyBase));
exports.SearchImagesResponse = SearchImagesResponse;
