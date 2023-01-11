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
exports.PostSpinsResponse = exports.PostSpinsRequest = exports.PostSpinsRequestBody = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostSpinsRequestBody = /** @class */ (function (_super) {
    __extends(PostSpinsRequestBody, _super);
    function PostSpinsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=artist;" }),
        __metadata("design:type", String)
    ], PostSpinsRequestBody.prototype, "artist", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=composer;" }),
        __metadata("design:type", String)
    ], PostSpinsRequestBody.prototype, "composer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=duration;" }),
        __metadata("design:type", Number)
    ], PostSpinsRequestBody.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=genre;" }),
        __metadata("design:type", String)
    ], PostSpinsRequestBody.prototype, "genre", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=isrc;" }),
        __metadata("design:type", String)
    ], PostSpinsRequestBody.prototype, "isrc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=label;" }),
        __metadata("design:type", String)
    ], PostSpinsRequestBody.prototype, "label", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=live;" }),
        __metadata("design:type", Boolean)
    ], PostSpinsRequestBody.prototype, "live", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=release;" }),
        __metadata("design:type", String)
    ], PostSpinsRequestBody.prototype, "release", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=song;" }),
        __metadata("design:type", String)
    ], PostSpinsRequestBody.prototype, "song", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=start;" }),
        __metadata("design:type", Date)
    ], PostSpinsRequestBody.prototype, "start", void 0);
    return PostSpinsRequestBody;
}(utils_1.SpeakeasyBase));
exports.PostSpinsRequestBody = PostSpinsRequestBody;
var PostSpinsRequest = /** @class */ (function (_super) {
    __extends(PostSpinsRequest, _super);
    function PostSpinsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", PostSpinsRequestBody)
    ], PostSpinsRequest.prototype, "request", void 0);
    return PostSpinsRequest;
}(utils_1.SpeakeasyBase));
exports.PostSpinsRequest = PostSpinsRequest;
var PostSpinsResponse = /** @class */ (function (_super) {
    __extends(PostSpinsResponse, _super);
    function PostSpinsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostSpinsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostSpinsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorT)
    ], PostSpinsResponse.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Spin)
    ], PostSpinsResponse.prototype, "spin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostSpinsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.ValidationError }),
        __metadata("design:type", Array)
    ], PostSpinsResponse.prototype, "validationErrors", void 0);
    return PostSpinsResponse;
}(utils_1.SpeakeasyBase));
exports.PostSpinsResponse = PostSpinsResponse;
