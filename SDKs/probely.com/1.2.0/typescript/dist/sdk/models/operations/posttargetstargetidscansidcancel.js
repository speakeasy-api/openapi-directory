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
exports.PostTargetsTargetIdScansIdCancelResponse = exports.PostTargetsTargetIdScansIdCancelRequest = exports.PostTargetsTargetIdScansIdCancel404ApplicationJson = exports.PostTargetsTargetIdScansIdCancel403ApplicationJson = exports.PostTargetsTargetIdScansIdCancel401ApplicationJson = exports.PostTargetsTargetIdScansIdCancelPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostTargetsTargetIdScansIdCancelPathParams = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdScansIdCancelPathParams, _super);
    function PostTargetsTargetIdScansIdCancelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdScansIdCancelPathParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdScansIdCancelPathParams.prototype, "targetId", void 0);
    return PostTargetsTargetIdScansIdCancelPathParams;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdScansIdCancelPathParams = PostTargetsTargetIdScansIdCancelPathParams;
var PostTargetsTargetIdScansIdCancel401ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdScansIdCancel401ApplicationJson, _super);
    function PostTargetsTargetIdScansIdCancel401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdScansIdCancel401ApplicationJson.prototype, "detail", void 0);
    return PostTargetsTargetIdScansIdCancel401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdScansIdCancel401ApplicationJson = PostTargetsTargetIdScansIdCancel401ApplicationJson;
var PostTargetsTargetIdScansIdCancel403ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdScansIdCancel403ApplicationJson, _super);
    function PostTargetsTargetIdScansIdCancel403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdScansIdCancel403ApplicationJson.prototype, "detail", void 0);
    return PostTargetsTargetIdScansIdCancel403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdScansIdCancel403ApplicationJson = PostTargetsTargetIdScansIdCancel403ApplicationJson;
var PostTargetsTargetIdScansIdCancel404ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdScansIdCancel404ApplicationJson, _super);
    function PostTargetsTargetIdScansIdCancel404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostTargetsTargetIdScansIdCancel404ApplicationJson.prototype, "detail", void 0);
    return PostTargetsTargetIdScansIdCancel404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdScansIdCancel404ApplicationJson = PostTargetsTargetIdScansIdCancel404ApplicationJson;
var PostTargetsTargetIdScansIdCancelRequest = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdScansIdCancelRequest, _super);
    function PostTargetsTargetIdScansIdCancelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdScansIdCancelPathParams)
    ], PostTargetsTargetIdScansIdCancelRequest.prototype, "pathParams", void 0);
    return PostTargetsTargetIdScansIdCancelRequest;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdScansIdCancelRequest = PostTargetsTargetIdScansIdCancelRequest;
var PostTargetsTargetIdScansIdCancelResponse = /** @class */ (function (_super) {
    __extends(PostTargetsTargetIdScansIdCancelResponse, _super);
    function PostTargetsTargetIdScansIdCancelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostTargetsTargetIdScansIdCancelResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Scan)
    ], PostTargetsTargetIdScansIdCancelResponse.prototype, "scan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostTargetsTargetIdScansIdCancelResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdScansIdCancel401ApplicationJson)
    ], PostTargetsTargetIdScansIdCancelResponse.prototype, "postTargetsTargetIdScansIdCancel401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdScansIdCancel403ApplicationJson)
    ], PostTargetsTargetIdScansIdCancelResponse.prototype, "postTargetsTargetIdScansIdCancel403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsTargetIdScansIdCancel404ApplicationJson)
    ], PostTargetsTargetIdScansIdCancelResponse.prototype, "postTargetsTargetIdScansIdCancel404ApplicationJSONObject", void 0);
    return PostTargetsTargetIdScansIdCancelResponse;
}(utils_1.SpeakeasyBase));
exports.PostTargetsTargetIdScansIdCancelResponse = PostTargetsTargetIdScansIdCancelResponse;
