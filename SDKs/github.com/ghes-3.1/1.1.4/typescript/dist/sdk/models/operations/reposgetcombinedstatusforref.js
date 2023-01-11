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
exports.ReposGetCombinedStatusForRefResponse = exports.ReposGetCombinedStatusForRefRequest = exports.ReposGetCombinedStatusForRefQueryParams = exports.ReposGetCombinedStatusForRefPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ReposGetCombinedStatusForRefPathParams = /** @class */ (function (_super) {
    __extends(ReposGetCombinedStatusForRefPathParams, _super);
    function ReposGetCombinedStatusForRefPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReposGetCombinedStatusForRefPathParams.prototype, "owner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ref" }),
        __metadata("design:type", String)
    ], ReposGetCombinedStatusForRefPathParams.prototype, "ref", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReposGetCombinedStatusForRefPathParams.prototype, "repo", void 0);
    return ReposGetCombinedStatusForRefPathParams;
}(utils_1.SpeakeasyBase));
exports.ReposGetCombinedStatusForRefPathParams = ReposGetCombinedStatusForRefPathParams;
var ReposGetCombinedStatusForRefQueryParams = /** @class */ (function (_super) {
    __extends(ReposGetCombinedStatusForRefQueryParams, _super);
    function ReposGetCombinedStatusForRefQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ReposGetCombinedStatusForRefQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ReposGetCombinedStatusForRefQueryParams.prototype, "perPage", void 0);
    return ReposGetCombinedStatusForRefQueryParams;
}(utils_1.SpeakeasyBase));
exports.ReposGetCombinedStatusForRefQueryParams = ReposGetCombinedStatusForRefQueryParams;
var ReposGetCombinedStatusForRefRequest = /** @class */ (function (_super) {
    __extends(ReposGetCombinedStatusForRefRequest, _super);
    function ReposGetCombinedStatusForRefRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReposGetCombinedStatusForRefPathParams)
    ], ReposGetCombinedStatusForRefRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReposGetCombinedStatusForRefQueryParams)
    ], ReposGetCombinedStatusForRefRequest.prototype, "queryParams", void 0);
    return ReposGetCombinedStatusForRefRequest;
}(utils_1.SpeakeasyBase));
exports.ReposGetCombinedStatusForRefRequest = ReposGetCombinedStatusForRefRequest;
var ReposGetCombinedStatusForRefResponse = /** @class */ (function (_super) {
    __extends(ReposGetCombinedStatusForRefResponse, _super);
    function ReposGetCombinedStatusForRefResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReposGetCombinedStatusForRefResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReposGetCombinedStatusForRefResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BasicError)
    ], ReposGetCombinedStatusForRefResponse.prototype, "basicError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CombinedCommitStatus)
    ], ReposGetCombinedStatusForRefResponse.prototype, "combinedCommitStatus", void 0);
    return ReposGetCombinedStatusForRefResponse;
}(utils_1.SpeakeasyBase));
exports.ReposGetCombinedStatusForRefResponse = ReposGetCombinedStatusForRefResponse;
