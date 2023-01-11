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
exports.GetListOfJobsResponse = exports.GetListOfJobsRequest = exports.GetListOfJobs400ApplicationProblemPlusJson = exports.GetListOfJobsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetListOfJobsQueryParams = /** @class */ (function (_super) {
    __extends(GetListOfJobsQueryParams, _super);
    function GetListOfJobsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetListOfJobsQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=starting_after" }),
        __metadata("design:type", String)
    ], GetListOfJobsQueryParams.prototype, "startingAfter", void 0);
    return GetListOfJobsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetListOfJobsQueryParams = GetListOfJobsQueryParams;
// GetListOfJobs400ApplicationProblemPlusJson
/**
 * Problem details object returned on errors
**/
var GetListOfJobs400ApplicationProblemPlusJson = /** @class */ (function (_super) {
    __extends(GetListOfJobs400ApplicationProblemPlusJson, _super);
    function GetListOfJobs400ApplicationProblemPlusJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parameters" }),
        __metadata("design:type", Object)
    ], GetListOfJobs400ApplicationProblemPlusJson.prototype, "parameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetListOfJobs400ApplicationProblemPlusJson.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetListOfJobs400ApplicationProblemPlusJson.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetListOfJobs400ApplicationProblemPlusJson.prototype, "type", void 0);
    return GetListOfJobs400ApplicationProblemPlusJson;
}(utils_1.SpeakeasyBase));
exports.GetListOfJobs400ApplicationProblemPlusJson = GetListOfJobs400ApplicationProblemPlusJson;
var GetListOfJobsRequest = /** @class */ (function (_super) {
    __extends(GetListOfJobsRequest, _super);
    function GetListOfJobsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetListOfJobsQueryParams)
    ], GetListOfJobsRequest.prototype, "queryParams", void 0);
    return GetListOfJobsRequest;
}(utils_1.SpeakeasyBase));
exports.GetListOfJobsRequest = GetListOfJobsRequest;
var GetListOfJobsResponse = /** @class */ (function (_super) {
    __extends(GetListOfJobsResponse, _super);
    function GetListOfJobsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetListOfJobsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetListOfJobs400ApplicationProblemPlusJson)
    ], GetListOfJobsResponse.prototype, "getListOfJobs400ApplicationProblemPlusJsonObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetListOfJobsResponse.prototype, "getListOfJobs401ApplicationProblemPlusJsonAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.Job }),
        __metadata("design:type", Array)
    ], GetListOfJobsResponse.prototype, "jobs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetListOfJobsResponse.prototype, "statusCode", void 0);
    return GetListOfJobsResponse;
}(utils_1.SpeakeasyBase));
exports.GetListOfJobsResponse = GetListOfJobsResponse;
