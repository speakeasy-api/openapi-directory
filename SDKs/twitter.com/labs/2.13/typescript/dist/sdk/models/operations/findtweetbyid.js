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
exports.FindTweetByIdResponse = exports.FindTweetByIdRequest = exports.FindTweetByIdQueryParams = exports.FindTweetByIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var FindTweetByIdPathParams = /** @class */ (function (_super) {
    __extends(FindTweetByIdPathParams, _super);
    function FindTweetByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], FindTweetByIdPathParams.prototype, "id", void 0);
    return FindTweetByIdPathParams;
}(utils_1.SpeakeasyBase));
exports.FindTweetByIdPathParams = FindTweetByIdPathParams;
var FindTweetByIdQueryParams = /** @class */ (function (_super) {
    __extends(FindTweetByIdQueryParams, _super);
    function FindTweetByIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=expansions" }),
        __metadata("design:type", Array)
    ], FindTweetByIdQueryParams.prototype, "expansions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=media.fields" }),
        __metadata("design:type", Array)
    ], FindTweetByIdQueryParams.prototype, "mediaFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=place.fields" }),
        __metadata("design:type", Array)
    ], FindTweetByIdQueryParams.prototype, "placeFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=poll.fields" }),
        __metadata("design:type", Array)
    ], FindTweetByIdQueryParams.prototype, "pollFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=tweet.fields" }),
        __metadata("design:type", Array)
    ], FindTweetByIdQueryParams.prototype, "tweetFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=user.fields" }),
        __metadata("design:type", Array)
    ], FindTweetByIdQueryParams.prototype, "userFields", void 0);
    return FindTweetByIdQueryParams;
}(utils_1.SpeakeasyBase));
exports.FindTweetByIdQueryParams = FindTweetByIdQueryParams;
var FindTweetByIdRequest = /** @class */ (function (_super) {
    __extends(FindTweetByIdRequest, _super);
    function FindTweetByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FindTweetByIdPathParams)
    ], FindTweetByIdRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FindTweetByIdQueryParams)
    ], FindTweetByIdRequest.prototype, "queryParams", void 0);
    return FindTweetByIdRequest;
}(utils_1.SpeakeasyBase));
exports.FindTweetByIdRequest = FindTweetByIdRequest;
var FindTweetByIdResponse = /** @class */ (function (_super) {
    __extends(FindTweetByIdResponse, _super);
    function FindTweetByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], FindTweetByIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], FindTweetByIdResponse.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], FindTweetByIdResponse.prototype, "problem", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.SingleTweetLookupResponse)
    ], FindTweetByIdResponse.prototype, "singleTweetLookupResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], FindTweetByIdResponse.prototype, "statusCode", void 0);
    return FindTweetByIdResponse;
}(utils_1.SpeakeasyBase));
exports.FindTweetByIdResponse = FindTweetByIdResponse;
