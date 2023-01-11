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
exports.QuerySuggestedImageCountResponse = exports.QuerySuggestedImageCountRequest = exports.QuerySuggestedImageCountRequests = exports.QuerySuggestedImageCountHeaders = exports.QuerySuggestedImageCountQueryParams = exports.QuerySuggestedImageCountPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var QuerySuggestedImageCountPathParams = /** @class */ (function (_super) {
    __extends(QuerySuggestedImageCountPathParams, _super);
    function QuerySuggestedImageCountPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], QuerySuggestedImageCountPathParams.prototype, "projectId", void 0);
    return QuerySuggestedImageCountPathParams;
}(utils_1.SpeakeasyBase));
exports.QuerySuggestedImageCountPathParams = QuerySuggestedImageCountPathParams;
var QuerySuggestedImageCountQueryParams = /** @class */ (function (_super) {
    __extends(QuerySuggestedImageCountQueryParams, _super);
    function QuerySuggestedImageCountQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=iterationId" }),
        __metadata("design:type", String)
    ], QuerySuggestedImageCountQueryParams.prototype, "iterationId", void 0);
    return QuerySuggestedImageCountQueryParams;
}(utils_1.SpeakeasyBase));
exports.QuerySuggestedImageCountQueryParams = QuerySuggestedImageCountQueryParams;
var QuerySuggestedImageCountHeaders = /** @class */ (function (_super) {
    __extends(QuerySuggestedImageCountHeaders, _super);
    function QuerySuggestedImageCountHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Training-Key" }),
        __metadata("design:type", String)
    ], QuerySuggestedImageCountHeaders.prototype, "trainingKey", void 0);
    return QuerySuggestedImageCountHeaders;
}(utils_1.SpeakeasyBase));
exports.QuerySuggestedImageCountHeaders = QuerySuggestedImageCountHeaders;
var QuerySuggestedImageCountRequests = /** @class */ (function (_super) {
    __extends(QuerySuggestedImageCountRequests, _super);
    function QuerySuggestedImageCountRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], QuerySuggestedImageCountRequests.prototype, "applicationXML", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TagFilter)
    ], QuerySuggestedImageCountRequests.prototype, "tagFilter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.TagFilter)
    ], QuerySuggestedImageCountRequests.prototype, "tagFilter1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], QuerySuggestedImageCountRequests.prototype, "textXML", void 0);
    return QuerySuggestedImageCountRequests;
}(utils_1.SpeakeasyBase));
exports.QuerySuggestedImageCountRequests = QuerySuggestedImageCountRequests;
var QuerySuggestedImageCountRequest = /** @class */ (function (_super) {
    __extends(QuerySuggestedImageCountRequest, _super);
    function QuerySuggestedImageCountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", QuerySuggestedImageCountPathParams)
    ], QuerySuggestedImageCountRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", QuerySuggestedImageCountQueryParams)
    ], QuerySuggestedImageCountRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", QuerySuggestedImageCountHeaders)
    ], QuerySuggestedImageCountRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", QuerySuggestedImageCountRequests)
    ], QuerySuggestedImageCountRequest.prototype, "request", void 0);
    return QuerySuggestedImageCountRequest;
}(utils_1.SpeakeasyBase));
exports.QuerySuggestedImageCountRequest = QuerySuggestedImageCountRequest;
var QuerySuggestedImageCountResponse = /** @class */ (function (_super) {
    __extends(QuerySuggestedImageCountResponse, _super);
    function QuerySuggestedImageCountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], QuerySuggestedImageCountResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], QuerySuggestedImageCountResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CustomVisionError)
    ], QuerySuggestedImageCountResponse.prototype, "customVisionError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], QuerySuggestedImageCountResponse.prototype, "querySuggestedImageCount200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], QuerySuggestedImageCountResponse.prototype, "statusCode", void 0);
    return QuerySuggestedImageCountResponse;
}(utils_1.SpeakeasyBase));
exports.QuerySuggestedImageCountResponse = QuerySuggestedImageCountResponse;
