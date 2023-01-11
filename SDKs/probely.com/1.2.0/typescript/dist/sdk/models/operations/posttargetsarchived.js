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
exports.PostTargetsArchivedResponse = exports.PostTargetsArchivedRequest = exports.PostTargetsArchived403ApplicationJson = exports.PostTargetsArchived401ApplicationJson = exports.PostTargetsArchived400ApplicationJson = exports.PostTargetsArchived200ApplicationJson = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostTargetsArchived200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsArchived200ApplicationJson, _super);
    function PostTargetsArchived200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], PostTargetsArchived200ApplicationJson.prototype, "length", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], PostTargetsArchived200ApplicationJson.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_total" }),
        __metadata("design:type", Number)
    ], PostTargetsArchived200ApplicationJson.prototype, "pageTotal", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pagination_count" }),
        __metadata("design:type", Number)
    ], PostTargetsArchived200ApplicationJson.prototype, "paginationCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results", elemType: shared.Target }),
        __metadata("design:type", Array)
    ], PostTargetsArchived200ApplicationJson.prototype, "results", void 0);
    return PostTargetsArchived200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsArchived200ApplicationJson = PostTargetsArchived200ApplicationJson;
var PostTargetsArchived400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsArchived400ApplicationJson, _super);
    function PostTargetsArchived400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=<field name>" }),
        __metadata("design:type", Array)
    ], PostTargetsArchived400ApplicationJson.prototype, "lessThanFieldNameGreaterThan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=non_field_errors" }),
        __metadata("design:type", Array)
    ], PostTargetsArchived400ApplicationJson.prototype, "nonFieldErrors", void 0);
    return PostTargetsArchived400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsArchived400ApplicationJson = PostTargetsArchived400ApplicationJson;
var PostTargetsArchived401ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsArchived401ApplicationJson, _super);
    function PostTargetsArchived401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostTargetsArchived401ApplicationJson.prototype, "detail", void 0);
    return PostTargetsArchived401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsArchived401ApplicationJson = PostTargetsArchived401ApplicationJson;
var PostTargetsArchived403ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTargetsArchived403ApplicationJson, _super);
    function PostTargetsArchived403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostTargetsArchived403ApplicationJson.prototype, "detail", void 0);
    return PostTargetsArchived403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostTargetsArchived403ApplicationJson = PostTargetsArchived403ApplicationJson;
var PostTargetsArchivedRequest = /** @class */ (function (_super) {
    __extends(PostTargetsArchivedRequest, _super);
    function PostTargetsArchivedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Array)
    ], PostTargetsArchivedRequest.prototype, "request", void 0);
    return PostTargetsArchivedRequest;
}(utils_1.SpeakeasyBase));
exports.PostTargetsArchivedRequest = PostTargetsArchivedRequest;
var PostTargetsArchivedResponse = /** @class */ (function (_super) {
    __extends(PostTargetsArchivedResponse, _super);
    function PostTargetsArchivedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostTargetsArchivedResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostTargetsArchivedResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsArchived200ApplicationJson)
    ], PostTargetsArchivedResponse.prototype, "postTargetsArchived200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsArchived400ApplicationJson)
    ], PostTargetsArchivedResponse.prototype, "postTargetsArchived400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsArchived401ApplicationJson)
    ], PostTargetsArchivedResponse.prototype, "postTargetsArchived401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTargetsArchived403ApplicationJson)
    ], PostTargetsArchivedResponse.prototype, "postTargetsArchived403ApplicationJSONObject", void 0);
    return PostTargetsArchivedResponse;
}(utils_1.SpeakeasyBase));
exports.PostTargetsArchivedResponse = PostTargetsArchivedResponse;
