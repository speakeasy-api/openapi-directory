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
exports.SearchUsersResponse = exports.SearchUsersRequest = exports.SearchUsers503ApplicationJson = exports.SearchUsers200ApplicationJson = exports.SearchUsersQueryParams = exports.SearchUsersSortEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SearchUsersSortEnum;
(function (SearchUsersSortEnum) {
    SearchUsersSortEnum["Followers"] = "followers";
    SearchUsersSortEnum["Repositories"] = "repositories";
    SearchUsersSortEnum["Joined"] = "joined";
})(SearchUsersSortEnum = exports.SearchUsersSortEnum || (exports.SearchUsersSortEnum = {}));
var SearchUsersQueryParams = /** @class */ (function (_super) {
    __extends(SearchUsersQueryParams, _super);
    function SearchUsersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], SearchUsersQueryParams.prototype, "order", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], SearchUsersQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], SearchUsersQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], SearchUsersQueryParams.prototype, "q", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], SearchUsersQueryParams.prototype, "sort", void 0);
    return SearchUsersQueryParams;
}(utils_1.SpeakeasyBase));
exports.SearchUsersQueryParams = SearchUsersQueryParams;
var SearchUsers200ApplicationJson = /** @class */ (function (_super) {
    __extends(SearchUsers200ApplicationJson, _super);
    function SearchUsers200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=incomplete_results" }),
        __metadata("design:type", Boolean)
    ], SearchUsers200ApplicationJson.prototype, "incompleteResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=items", elemType: shared.UserSearchResultItem }),
        __metadata("design:type", Array)
    ], SearchUsers200ApplicationJson.prototype, "items", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_count" }),
        __metadata("design:type", Number)
    ], SearchUsers200ApplicationJson.prototype, "totalCount", void 0);
    return SearchUsers200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.SearchUsers200ApplicationJson = SearchUsers200ApplicationJson;
var SearchUsers503ApplicationJson = /** @class */ (function (_super) {
    __extends(SearchUsers503ApplicationJson, _super);
    function SearchUsers503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], SearchUsers503ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], SearchUsers503ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SearchUsers503ApplicationJson.prototype, "message", void 0);
    return SearchUsers503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.SearchUsers503ApplicationJson = SearchUsers503ApplicationJson;
var SearchUsersRequest = /** @class */ (function (_super) {
    __extends(SearchUsersRequest, _super);
    function SearchUsersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SearchUsersQueryParams)
    ], SearchUsersRequest.prototype, "queryParams", void 0);
    return SearchUsersRequest;
}(utils_1.SpeakeasyBase));
exports.SearchUsersRequest = SearchUsersRequest;
var SearchUsersResponse = /** @class */ (function (_super) {
    __extends(SearchUsersResponse, _super);
    function SearchUsersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SearchUsersResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SearchUsersResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SearchUsers200ApplicationJson)
    ], SearchUsersResponse.prototype, "searchUsers200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SearchUsers503ApplicationJson)
    ], SearchUsersResponse.prototype, "searchUsers503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ValidationError)
    ], SearchUsersResponse.prototype, "validationError", void 0);
    return SearchUsersResponse;
}(utils_1.SpeakeasyBase));
exports.SearchUsersResponse = SearchUsersResponse;
