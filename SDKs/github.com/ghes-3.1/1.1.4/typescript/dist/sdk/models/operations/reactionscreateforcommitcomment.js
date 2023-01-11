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
exports.ReactionsCreateForCommitCommentResponse = exports.ReactionsCreateForCommitCommentRequest = exports.ReactionsCreateForCommitComment415ApplicationJson = exports.ReactionsCreateForCommitCommentRequestBody = exports.ReactionsCreateForCommitCommentRequestBodyContentEnum = exports.ReactionsCreateForCommitCommentPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ReactionsCreateForCommitCommentPathParams = /** @class */ (function (_super) {
    __extends(ReactionsCreateForCommitCommentPathParams, _super);
    function ReactionsCreateForCommitCommentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=comment_id" }),
        __metadata("design:type", Number)
    ], ReactionsCreateForCommitCommentPathParams.prototype, "commentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReactionsCreateForCommitCommentPathParams.prototype, "owner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReactionsCreateForCommitCommentPathParams.prototype, "repo", void 0);
    return ReactionsCreateForCommitCommentPathParams;
}(utils_1.SpeakeasyBase));
exports.ReactionsCreateForCommitCommentPathParams = ReactionsCreateForCommitCommentPathParams;
var ReactionsCreateForCommitCommentRequestBodyContentEnum;
(function (ReactionsCreateForCommitCommentRequestBodyContentEnum) {
    ReactionsCreateForCommitCommentRequestBodyContentEnum["Plus1"] = "+1";
    ReactionsCreateForCommitCommentRequestBodyContentEnum["Minus1"] = "-1";
    ReactionsCreateForCommitCommentRequestBodyContentEnum["Laugh"] = "laugh";
    ReactionsCreateForCommitCommentRequestBodyContentEnum["Confused"] = "confused";
    ReactionsCreateForCommitCommentRequestBodyContentEnum["Heart"] = "heart";
    ReactionsCreateForCommitCommentRequestBodyContentEnum["Hooray"] = "hooray";
    ReactionsCreateForCommitCommentRequestBodyContentEnum["Rocket"] = "rocket";
    ReactionsCreateForCommitCommentRequestBodyContentEnum["Eyes"] = "eyes";
})(ReactionsCreateForCommitCommentRequestBodyContentEnum = exports.ReactionsCreateForCommitCommentRequestBodyContentEnum || (exports.ReactionsCreateForCommitCommentRequestBodyContentEnum = {}));
var ReactionsCreateForCommitCommentRequestBody = /** @class */ (function (_super) {
    __extends(ReactionsCreateForCommitCommentRequestBody, _super);
    function ReactionsCreateForCommitCommentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], ReactionsCreateForCommitCommentRequestBody.prototype, "content", void 0);
    return ReactionsCreateForCommitCommentRequestBody;
}(utils_1.SpeakeasyBase));
exports.ReactionsCreateForCommitCommentRequestBody = ReactionsCreateForCommitCommentRequestBody;
var ReactionsCreateForCommitComment415ApplicationJson = /** @class */ (function (_super) {
    __extends(ReactionsCreateForCommitComment415ApplicationJson, _super);
    function ReactionsCreateForCommitComment415ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], ReactionsCreateForCommitComment415ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ReactionsCreateForCommitComment415ApplicationJson.prototype, "message", void 0);
    return ReactionsCreateForCommitComment415ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ReactionsCreateForCommitComment415ApplicationJson = ReactionsCreateForCommitComment415ApplicationJson;
var ReactionsCreateForCommitCommentRequest = /** @class */ (function (_super) {
    __extends(ReactionsCreateForCommitCommentRequest, _super);
    function ReactionsCreateForCommitCommentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReactionsCreateForCommitCommentPathParams)
    ], ReactionsCreateForCommitCommentRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReactionsCreateForCommitCommentRequestBody)
    ], ReactionsCreateForCommitCommentRequest.prototype, "request", void 0);
    return ReactionsCreateForCommitCommentRequest;
}(utils_1.SpeakeasyBase));
exports.ReactionsCreateForCommitCommentRequest = ReactionsCreateForCommitCommentRequest;
var ReactionsCreateForCommitCommentResponse = /** @class */ (function (_super) {
    __extends(ReactionsCreateForCommitCommentResponse, _super);
    function ReactionsCreateForCommitCommentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReactionsCreateForCommitCommentResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReactionsCreateForCommitCommentResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Reaction)
    ], ReactionsCreateForCommitCommentResponse.prototype, "reaction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReactionsCreateForCommitComment415ApplicationJson)
    ], ReactionsCreateForCommitCommentResponse.prototype, "reactionsCreateForCommitComment415ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ValidationError)
    ], ReactionsCreateForCommitCommentResponse.prototype, "validationError", void 0);
    return ReactionsCreateForCommitCommentResponse;
}(utils_1.SpeakeasyBase));
exports.ReactionsCreateForCommitCommentResponse = ReactionsCreateForCommitCommentResponse;
