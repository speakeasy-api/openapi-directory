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
exports.SearchVideosResponse = exports.SearchVideosRequest = exports.SearchVideosSecurity = exports.SearchVideosQueryParams = exports.SearchVideosViewEnum = exports.SearchVideosSortEnum = exports.SearchVideosResolutionEnum = exports.SearchVideosPeopleGenderEnum = exports.SearchVideosPeopleEthnicityEnum = exports.SearchVideosPeopleAgeEnum = exports.SearchVideosLicenseEnum = exports.SearchVideosAspectRatioEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SearchVideosAspectRatioEnum;
(function (SearchVideosAspectRatioEnum) {
    SearchVideosAspectRatioEnum["Four3"] = "4_3";
    SearchVideosAspectRatioEnum["Sixteen9"] = "16_9";
    SearchVideosAspectRatioEnum["Nonstandard"] = "nonstandard";
})(SearchVideosAspectRatioEnum = exports.SearchVideosAspectRatioEnum || (exports.SearchVideosAspectRatioEnum = {}));
var SearchVideosLicenseEnum;
(function (SearchVideosLicenseEnum) {
    SearchVideosLicenseEnum["Commercial"] = "commercial";
    SearchVideosLicenseEnum["Editorial"] = "editorial";
})(SearchVideosLicenseEnum = exports.SearchVideosLicenseEnum || (exports.SearchVideosLicenseEnum = {}));
var SearchVideosPeopleAgeEnum;
(function (SearchVideosPeopleAgeEnum) {
    SearchVideosPeopleAgeEnum["Infants"] = "infants";
    SearchVideosPeopleAgeEnum["Children"] = "children";
    SearchVideosPeopleAgeEnum["Teenagers"] = "teenagers";
    SearchVideosPeopleAgeEnum["Twentys"] = "20s";
    SearchVideosPeopleAgeEnum["Thirtys"] = "30s";
    SearchVideosPeopleAgeEnum["Fortys"] = "40s";
    SearchVideosPeopleAgeEnum["Fiftys"] = "50s";
    SearchVideosPeopleAgeEnum["Sixtys"] = "60s";
    SearchVideosPeopleAgeEnum["Older"] = "older";
})(SearchVideosPeopleAgeEnum = exports.SearchVideosPeopleAgeEnum || (exports.SearchVideosPeopleAgeEnum = {}));
var SearchVideosPeopleEthnicityEnum;
(function (SearchVideosPeopleEthnicityEnum) {
    SearchVideosPeopleEthnicityEnum["African"] = "african";
    SearchVideosPeopleEthnicityEnum["AfricanAmerican"] = "african_american";
    SearchVideosPeopleEthnicityEnum["Black"] = "black";
    SearchVideosPeopleEthnicityEnum["Brazilian"] = "brazilian";
    SearchVideosPeopleEthnicityEnum["Chinese"] = "chinese";
    SearchVideosPeopleEthnicityEnum["Caucasian"] = "caucasian";
    SearchVideosPeopleEthnicityEnum["EastAsian"] = "east_asian";
    SearchVideosPeopleEthnicityEnum["Hispanic"] = "hispanic";
    SearchVideosPeopleEthnicityEnum["Japanese"] = "japanese";
    SearchVideosPeopleEthnicityEnum["MiddleEastern"] = "middle_eastern";
    SearchVideosPeopleEthnicityEnum["NativeAmerican"] = "native_american";
    SearchVideosPeopleEthnicityEnum["PacificIslander"] = "pacific_islander";
    SearchVideosPeopleEthnicityEnum["SouthAsian"] = "south_asian";
    SearchVideosPeopleEthnicityEnum["SoutheastAsian"] = "southeast_asian";
    SearchVideosPeopleEthnicityEnum["Other"] = "other";
})(SearchVideosPeopleEthnicityEnum = exports.SearchVideosPeopleEthnicityEnum || (exports.SearchVideosPeopleEthnicityEnum = {}));
var SearchVideosPeopleGenderEnum;
(function (SearchVideosPeopleGenderEnum) {
    SearchVideosPeopleGenderEnum["Male"] = "male";
    SearchVideosPeopleGenderEnum["Female"] = "female";
    SearchVideosPeopleGenderEnum["Both"] = "both";
})(SearchVideosPeopleGenderEnum = exports.SearchVideosPeopleGenderEnum || (exports.SearchVideosPeopleGenderEnum = {}));
var SearchVideosResolutionEnum;
(function (SearchVideosResolutionEnum) {
    SearchVideosResolutionEnum["Fourk"] = "4k";
    SearchVideosResolutionEnum["StandardDefinition"] = "standard_definition";
    SearchVideosResolutionEnum["HighDefinition"] = "high_definition";
})(SearchVideosResolutionEnum = exports.SearchVideosResolutionEnum || (exports.SearchVideosResolutionEnum = {}));
var SearchVideosSortEnum;
(function (SearchVideosSortEnum) {
    SearchVideosSortEnum["Newest"] = "newest";
    SearchVideosSortEnum["Popular"] = "popular";
    SearchVideosSortEnum["Relevance"] = "relevance";
    SearchVideosSortEnum["Random"] = "random";
})(SearchVideosSortEnum = exports.SearchVideosSortEnum || (exports.SearchVideosSortEnum = {}));
var SearchVideosViewEnum;
(function (SearchVideosViewEnum) {
    SearchVideosViewEnum["Minimal"] = "minimal";
    SearchVideosViewEnum["Full"] = "full";
})(SearchVideosViewEnum = exports.SearchVideosViewEnum || (exports.SearchVideosViewEnum = {}));
var SearchVideosQueryParams = /** @class */ (function (_super) {
    __extends(SearchVideosQueryParams, _super);
    function SearchVideosQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=added_date" }),
        __metadata("design:type", Date)
    ], SearchVideosQueryParams.prototype, "addedDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=added_date_end" }),
        __metadata("design:type", Date)
    ], SearchVideosQueryParams.prototype, "addedDateEnd", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=added_date_start" }),
        __metadata("design:type", Date)
    ], SearchVideosQueryParams.prototype, "addedDateStart", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=aspect_ratio" }),
        __metadata("design:type", String)
    ], SearchVideosQueryParams.prototype, "aspectRatio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=category" }),
        __metadata("design:type", String)
    ], SearchVideosQueryParams.prototype, "category", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=contributor" }),
        __metadata("design:type", Array)
    ], SearchVideosQueryParams.prototype, "contributor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=contributor_country" }),
        __metadata("design:type", Array)
    ], SearchVideosQueryParams.prototype, "contributorCountry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=duration" }),
        __metadata("design:type", Number)
    ], SearchVideosQueryParams.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=duration_from" }),
        __metadata("design:type", Number)
    ], SearchVideosQueryParams.prototype, "durationFrom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=duration_to" }),
        __metadata("design:type", Number)
    ], SearchVideosQueryParams.prototype, "durationTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fps" }),
        __metadata("design:type", Number)
    ], SearchVideosQueryParams.prototype, "fps", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fps_from" }),
        __metadata("design:type", Number)
    ], SearchVideosQueryParams.prototype, "fpsFrom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fps_to" }),
        __metadata("design:type", Number)
    ], SearchVideosQueryParams.prototype, "fpsTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=keyword_safe_search" }),
        __metadata("design:type", Boolean)
    ], SearchVideosQueryParams.prototype, "keywordSafeSearch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=language" }),
        __metadata("design:type", String)
    ], SearchVideosQueryParams.prototype, "language", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=license" }),
        __metadata("design:type", Array)
    ], SearchVideosQueryParams.prototype, "license", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=model" }),
        __metadata("design:type", Array)
    ], SearchVideosQueryParams.prototype, "model", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], SearchVideosQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=people_age" }),
        __metadata("design:type", String)
    ], SearchVideosQueryParams.prototype, "peopleAge", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=people_ethnicity" }),
        __metadata("design:type", Array)
    ], SearchVideosQueryParams.prototype, "peopleEthnicity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=people_gender" }),
        __metadata("design:type", String)
    ], SearchVideosQueryParams.prototype, "peopleGender", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=people_model_released" }),
        __metadata("design:type", Boolean)
    ], SearchVideosQueryParams.prototype, "peopleModelReleased", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=people_number" }),
        __metadata("design:type", Number)
    ], SearchVideosQueryParams.prototype, "peopleNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], SearchVideosQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], SearchVideosQueryParams.prototype, "query", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=resolution" }),
        __metadata("design:type", String)
    ], SearchVideosQueryParams.prototype, "resolution", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=safe" }),
        __metadata("design:type", Boolean)
    ], SearchVideosQueryParams.prototype, "safe", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], SearchVideosQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], SearchVideosQueryParams.prototype, "view", void 0);
    return SearchVideosQueryParams;
}(utils_1.SpeakeasyBase));
exports.SearchVideosQueryParams = SearchVideosQueryParams;
var SearchVideosSecurity = /** @class */ (function (_super) {
    __extends(SearchVideosSecurity, _super);
    function SearchVideosSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], SearchVideosSecurity.prototype, "basic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeCustomerAccessCode)
    ], SearchVideosSecurity.prototype, "customerAccessCode", void 0);
    return SearchVideosSecurity;
}(utils_1.SpeakeasyBase));
exports.SearchVideosSecurity = SearchVideosSecurity;
var SearchVideosRequest = /** @class */ (function (_super) {
    __extends(SearchVideosRequest, _super);
    function SearchVideosRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SearchVideosQueryParams)
    ], SearchVideosRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SearchVideosSecurity)
    ], SearchVideosRequest.prototype, "security", void 0);
    return SearchVideosRequest;
}(utils_1.SpeakeasyBase));
exports.SearchVideosRequest = SearchVideosRequest;
var SearchVideosResponse = /** @class */ (function (_super) {
    __extends(SearchVideosResponse, _super);
    function SearchVideosResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SearchVideosResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SearchVideosResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.VideoSearchResults)
    ], SearchVideosResponse.prototype, "videoSearchResults", void 0);
    return SearchVideosResponse;
}(utils_1.SpeakeasyBase));
exports.SearchVideosResponse = SearchVideosResponse;
