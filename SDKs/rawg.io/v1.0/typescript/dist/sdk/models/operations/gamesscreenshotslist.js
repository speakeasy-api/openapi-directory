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
exports.GamesScreenshotsListResponse = exports.GamesScreenshotsListRequest = exports.GamesScreenshotsList200ApplicationJson = exports.GamesScreenshotsListQueryParams = exports.GamesScreenshotsListPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GamesScreenshotsListPathParams = /** @class */ (function (_super) {
    __extends(GamesScreenshotsListPathParams, _super);
    function GamesScreenshotsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=game_pk" }),
        __metadata("design:type", String)
    ], GamesScreenshotsListPathParams.prototype, "gamePk", void 0);
    return GamesScreenshotsListPathParams;
}(utils_1.SpeakeasyBase));
exports.GamesScreenshotsListPathParams = GamesScreenshotsListPathParams;
var GamesScreenshotsListQueryParams = /** @class */ (function (_super) {
    __extends(GamesScreenshotsListQueryParams, _super);
    function GamesScreenshotsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ordering" }),
        __metadata("design:type", String)
    ], GamesScreenshotsListQueryParams.prototype, "ordering", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GamesScreenshotsListQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GamesScreenshotsListQueryParams.prototype, "pageSize", void 0);
    return GamesScreenshotsListQueryParams;
}(utils_1.SpeakeasyBase));
exports.GamesScreenshotsListQueryParams = GamesScreenshotsListQueryParams;
var GamesScreenshotsList200ApplicationJson = /** @class */ (function (_super) {
    __extends(GamesScreenshotsList200ApplicationJson, _super);
    function GamesScreenshotsList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GamesScreenshotsList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], GamesScreenshotsList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], GamesScreenshotsList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results", elemType: shared.ScreenShot }),
        __metadata("design:type", Array)
    ], GamesScreenshotsList200ApplicationJson.prototype, "results", void 0);
    return GamesScreenshotsList200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GamesScreenshotsList200ApplicationJson = GamesScreenshotsList200ApplicationJson;
var GamesScreenshotsListRequest = /** @class */ (function (_super) {
    __extends(GamesScreenshotsListRequest, _super);
    function GamesScreenshotsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GamesScreenshotsListPathParams)
    ], GamesScreenshotsListRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GamesScreenshotsListQueryParams)
    ], GamesScreenshotsListRequest.prototype, "queryParams", void 0);
    return GamesScreenshotsListRequest;
}(utils_1.SpeakeasyBase));
exports.GamesScreenshotsListRequest = GamesScreenshotsListRequest;
var GamesScreenshotsListResponse = /** @class */ (function (_super) {
    __extends(GamesScreenshotsListResponse, _super);
    function GamesScreenshotsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GamesScreenshotsListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GamesScreenshotsListResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GamesScreenshotsList200ApplicationJson)
    ], GamesScreenshotsListResponse.prototype, "gamesScreenshotsList200ApplicationJSONObject", void 0);
    return GamesScreenshotsListResponse;
}(utils_1.SpeakeasyBase));
exports.GamesScreenshotsListResponse = GamesScreenshotsListResponse;
