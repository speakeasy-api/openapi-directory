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
exports.GetListsBestSellersHistoryJsonResponse = exports.GetListsBestSellersHistoryJsonRequest = exports.GetListsBestSellersHistoryJson200ApplicationJson = exports.GetListsBestSellersHistoryJson200ApplicationJsonResults = exports.GetListsBestSellersHistoryJson200ApplicationJsonResultsReviews = exports.GetListsBestSellersHistoryJson200ApplicationJsonResultsRanksHistory = exports.GetListsBestSellersHistoryJson200ApplicationJsonResultsIsbns = exports.GetListsBestSellersHistoryJsonSecurity = exports.GetListsBestSellersHistoryJsonQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetListsBestSellersHistoryJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetListsBestSellersHistoryJsonQueryParams, _super);
    function GetListsBestSellersHistoryJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=age-group" }),
        __metadata("design:type", String)
    ], GetListsBestSellersHistoryJsonQueryParams.prototype, "ageGroup", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=author" }),
        __metadata("design:type", String)
    ], GetListsBestSellersHistoryJsonQueryParams.prototype, "author", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=contributor" }),
        __metadata("design:type", String)
    ], GetListsBestSellersHistoryJsonQueryParams.prototype, "contributor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=isbn" }),
        __metadata("design:type", String)
    ], GetListsBestSellersHistoryJsonQueryParams.prototype, "isbn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=price" }),
        __metadata("design:type", String)
    ], GetListsBestSellersHistoryJsonQueryParams.prototype, "price", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=publisher" }),
        __metadata("design:type", String)
    ], GetListsBestSellersHistoryJsonQueryParams.prototype, "publisher", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=title" }),
        __metadata("design:type", String)
    ], GetListsBestSellersHistoryJsonQueryParams.prototype, "title", void 0);
    return GetListsBestSellersHistoryJsonQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetListsBestSellersHistoryJsonQueryParams = GetListsBestSellersHistoryJsonQueryParams;
var GetListsBestSellersHistoryJsonSecurity = /** @class */ (function (_super) {
    __extends(GetListsBestSellersHistoryJsonSecurity, _super);
    function GetListsBestSellersHistoryJsonSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetListsBestSellersHistoryJsonSecurity.prototype, "apiKey", void 0);
    return GetListsBestSellersHistoryJsonSecurity;
}(utils_1.SpeakeasyBase));
exports.GetListsBestSellersHistoryJsonSecurity = GetListsBestSellersHistoryJsonSecurity;
var GetListsBestSellersHistoryJson200ApplicationJsonResultsIsbns = /** @class */ (function (_super) {
    __extends(GetListsBestSellersHistoryJson200ApplicationJsonResultsIsbns, _super);
    function GetListsBestSellersHistoryJson200ApplicationJsonResultsIsbns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isbn10" }),
        __metadata("design:type", String)
    ], GetListsBestSellersHistoryJson200ApplicationJsonResultsIsbns.prototype, "isbn10", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isbn13" }),
        __metadata("design:type", String)
    ], GetListsBestSellersHistoryJson200ApplicationJsonResultsIsbns.prototype, "isbn13", void 0);
    return GetListsBestSellersHistoryJson200ApplicationJsonResultsIsbns;
}(utils_1.SpeakeasyBase));
exports.GetListsBestSellersHistoryJson200ApplicationJsonResultsIsbns = GetListsBestSellersHistoryJson200ApplicationJsonResultsIsbns;
var GetListsBestSellersHistoryJson200ApplicationJsonResultsRanksHistory = /** @class */ (function (_super) {
    __extends(GetListsBestSellersHistoryJson200ApplicationJsonResultsRanksHistory, _super);
    function GetListsBestSellersHistoryJson200ApplicationJsonResultsRanksHistory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=asterisk" }),
        __metadata("design:type", Number)
    ], GetListsBestSellersHistoryJson200ApplicationJsonResultsRanksHistory.prototype, "asterisk", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bestsellers_date" }),
        __metadata("design:type", String)
    ], GetListsBestSellersHistoryJson200ApplicationJsonResultsRanksHistory.prototype, "bestsellersDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dagger" }),
        __metadata("design:type", Number)
    ], GetListsBestSellersHistoryJson200ApplicationJsonResultsRanksHistory.prototype, "dagger", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], GetListsBestSellersHistoryJson200ApplicationJsonResultsRanksHistory.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=list_name" }),
        __metadata("design:type", String)
    ], GetListsBestSellersHistoryJson200ApplicationJsonResultsRanksHistory.prototype, "listName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=primary_isbn10" }),
        __metadata("design:type", String)
    ], GetListsBestSellersHistoryJson200ApplicationJsonResultsRanksHistory.prototype, "primaryIsbn10", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=primary_isbn13" }),
        __metadata("design:type", String)
    ], GetListsBestSellersHistoryJson200ApplicationJsonResultsRanksHistory.prototype, "primaryIsbn13", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=published_date" }),
        __metadata("design:type", String)
    ], GetListsBestSellersHistoryJson200ApplicationJsonResultsRanksHistory.prototype, "publishedDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rank" }),
        __metadata("design:type", Number)
    ], GetListsBestSellersHistoryJson200ApplicationJsonResultsRanksHistory.prototype, "rank", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ranks_last_week" }),
        __metadata("design:type", Object)
    ], GetListsBestSellersHistoryJson200ApplicationJsonResultsRanksHistory.prototype, "ranksLastWeek", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weeks_on_list" }),
        __metadata("design:type", Number)
    ], GetListsBestSellersHistoryJson200ApplicationJsonResultsRanksHistory.prototype, "weeksOnList", void 0);
    return GetListsBestSellersHistoryJson200ApplicationJsonResultsRanksHistory;
}(utils_1.SpeakeasyBase));
exports.GetListsBestSellersHistoryJson200ApplicationJsonResultsRanksHistory = GetListsBestSellersHistoryJson200ApplicationJsonResultsRanksHistory;
var GetListsBestSellersHistoryJson200ApplicationJsonResultsReviews = /** @class */ (function (_super) {
    __extends(GetListsBestSellersHistoryJson200ApplicationJsonResultsReviews, _super);
    function GetListsBestSellersHistoryJson200ApplicationJsonResultsReviews() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=article_chapter_link" }),
        __metadata("design:type", String)
    ], GetListsBestSellersHistoryJson200ApplicationJsonResultsReviews.prototype, "articleChapterLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=book_review_link" }),
        __metadata("design:type", String)
    ], GetListsBestSellersHistoryJson200ApplicationJsonResultsReviews.prototype, "bookReviewLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_chapter_link" }),
        __metadata("design:type", String)
    ], GetListsBestSellersHistoryJson200ApplicationJsonResultsReviews.prototype, "firstChapterLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sunday_review_link" }),
        __metadata("design:type", String)
    ], GetListsBestSellersHistoryJson200ApplicationJsonResultsReviews.prototype, "sundayReviewLink", void 0);
    return GetListsBestSellersHistoryJson200ApplicationJsonResultsReviews;
}(utils_1.SpeakeasyBase));
exports.GetListsBestSellersHistoryJson200ApplicationJsonResultsReviews = GetListsBestSellersHistoryJson200ApplicationJsonResultsReviews;
var GetListsBestSellersHistoryJson200ApplicationJsonResults = /** @class */ (function (_super) {
    __extends(GetListsBestSellersHistoryJson200ApplicationJsonResults, _super);
    function GetListsBestSellersHistoryJson200ApplicationJsonResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=age_group" }),
        __metadata("design:type", String)
    ], GetListsBestSellersHistoryJson200ApplicationJsonResults.prototype, "ageGroup", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=author" }),
        __metadata("design:type", String)
    ], GetListsBestSellersHistoryJson200ApplicationJsonResults.prototype, "author", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contributor" }),
        __metadata("design:type", String)
    ], GetListsBestSellersHistoryJson200ApplicationJsonResults.prototype, "contributor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contributor_note" }),
        __metadata("design:type", String)
    ], GetListsBestSellersHistoryJson200ApplicationJsonResults.prototype, "contributorNote", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetListsBestSellersHistoryJson200ApplicationJsonResults.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isbns", elemType: GetListsBestSellersHistoryJson200ApplicationJsonResultsIsbns }),
        __metadata("design:type", Array)
    ], GetListsBestSellersHistoryJson200ApplicationJsonResults.prototype, "isbns", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], GetListsBestSellersHistoryJson200ApplicationJsonResults.prototype, "price", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=publisher" }),
        __metadata("design:type", String)
    ], GetListsBestSellersHistoryJson200ApplicationJsonResults.prototype, "publisher", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ranks_history", elemType: GetListsBestSellersHistoryJson200ApplicationJsonResultsRanksHistory }),
        __metadata("design:type", Array)
    ], GetListsBestSellersHistoryJson200ApplicationJsonResults.prototype, "ranksHistory", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reviews", elemType: GetListsBestSellersHistoryJson200ApplicationJsonResultsReviews }),
        __metadata("design:type", Array)
    ], GetListsBestSellersHistoryJson200ApplicationJsonResults.prototype, "reviews", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetListsBestSellersHistoryJson200ApplicationJsonResults.prototype, "title", void 0);
    return GetListsBestSellersHistoryJson200ApplicationJsonResults;
}(utils_1.SpeakeasyBase));
exports.GetListsBestSellersHistoryJson200ApplicationJsonResults = GetListsBestSellersHistoryJson200ApplicationJsonResults;
var GetListsBestSellersHistoryJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetListsBestSellersHistoryJson200ApplicationJson, _super);
    function GetListsBestSellersHistoryJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=copyright" }),
        __metadata("design:type", String)
    ], GetListsBestSellersHistoryJson200ApplicationJson.prototype, "copyright", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=num_results" }),
        __metadata("design:type", Number)
    ], GetListsBestSellersHistoryJson200ApplicationJson.prototype, "numResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results", elemType: GetListsBestSellersHistoryJson200ApplicationJsonResults }),
        __metadata("design:type", Array)
    ], GetListsBestSellersHistoryJson200ApplicationJson.prototype, "results", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetListsBestSellersHistoryJson200ApplicationJson.prototype, "status", void 0);
    return GetListsBestSellersHistoryJson200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetListsBestSellersHistoryJson200ApplicationJson = GetListsBestSellersHistoryJson200ApplicationJson;
var GetListsBestSellersHistoryJsonRequest = /** @class */ (function (_super) {
    __extends(GetListsBestSellersHistoryJsonRequest, _super);
    function GetListsBestSellersHistoryJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetListsBestSellersHistoryJsonQueryParams)
    ], GetListsBestSellersHistoryJsonRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetListsBestSellersHistoryJsonSecurity)
    ], GetListsBestSellersHistoryJsonRequest.prototype, "security", void 0);
    return GetListsBestSellersHistoryJsonRequest;
}(utils_1.SpeakeasyBase));
exports.GetListsBestSellersHistoryJsonRequest = GetListsBestSellersHistoryJsonRequest;
var GetListsBestSellersHistoryJsonResponse = /** @class */ (function (_super) {
    __extends(GetListsBestSellersHistoryJsonResponse, _super);
    function GetListsBestSellersHistoryJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetListsBestSellersHistoryJsonResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetListsBestSellersHistoryJson200ApplicationJson)
    ], GetListsBestSellersHistoryJsonResponse.prototype, "getListsBestSellersHistoryJSON200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetListsBestSellersHistoryJsonResponse.prototype, "statusCode", void 0);
    return GetListsBestSellersHistoryJsonResponse;
}(utils_1.SpeakeasyBase));
exports.GetListsBestSellersHistoryJsonResponse = GetListsBestSellersHistoryJsonResponse;
