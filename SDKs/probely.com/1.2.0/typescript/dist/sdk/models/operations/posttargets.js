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
exports.PostTargetsResponse = exports.PostTargetsRequest = exports.PostTargets500ApplicationJson = exports.PostTargets403ApplicationJson = exports.PostTargets401ApplicationJson = exports.PostTargets400ApplicationJson = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostTargets400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargets400ApplicationJson, _super);
    function PostTargets400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=<field name>" }),
        __metadata("design:type", Array)
    ], PostTargets400ApplicationJson.prototype, "lessThanFieldNameGreaterThan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=non_field_errors" }),
        __metadata("design:type", Array)
    ], PostTargets400ApplicationJson.prototype, "nonFieldErrors", void 0);
    return PostTargets400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargets400ApplicationJson = PostTargets400ApplicationJson;
var PostTargets401ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargets401ApplicationJson, _super);
    function PostTargets401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostTargets401ApplicationJson.prototype, "detail", void 0);
    return PostTargets401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargets401ApplicationJson = PostTargets401ApplicationJson;
var PostTargets403ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargets403ApplicationJson, _super);
    function PostTargets403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostTargets403ApplicationJson.prototype, "detail", void 0);
    return PostTargets403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargets403ApplicationJson = PostTargets403ApplicationJson;
var PostTargets500ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargets500ApplicationJson, _super);
    function PostTargets500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostTargets500ApplicationJson.prototype, "detail", void 0);
    return PostTargets500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargets500ApplicationJson = PostTargets500ApplicationJson;
var PostTargetsRequest = /** @class */ (function (_super) {
    __extends(PostTargetsRequest, _super);
    function PostTargetsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TargetInput)
    ], PostTargetsRequest.prototype, "request", void 0);
    return PostTargetsRequest;
}(utils_1.SpeakeasyBase));
exports.PostTargetsRequest = PostTargetsRequest;
var PostTargetsResponse = /** @class */ (function (_super) {
    __extends(PostTargetsResponse, _super);
    function PostTargetsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostTargetsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostTargetsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Target)
    ], PostTargetsResponse.prototype, "target", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargets400ApplicationJson)
    ], PostTargetsResponse.prototype, "postTargets400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargets401ApplicationJson)
    ], PostTargetsResponse.prototype, "postTargets401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargets403ApplicationJson)
    ], PostTargetsResponse.prototype, "postTargets403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargets500ApplicationJson)
    ], PostTargetsResponse.prototype, "postTargets500ApplicationJSONObject", void 0);
    return PostTargetsResponse;
}(utils_1.SpeakeasyBase));
exports.PostTargetsResponse = PostTargetsResponse;
