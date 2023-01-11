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
exports.RunsForRunResponse = exports.RunsForRunRequest = exports.RunsForRunQueryParams = exports.RunsForRunExpandEnum = exports.RunsForRunPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var RunsForRunPathParams = /** @class */ (function (_super) {
    __extends(RunsForRunPathParams, _super);
    function RunsForRunPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=run_ref" }),
        __metadata("design:type", String)
    ], RunsForRunPathParams.prototype, "runRef", void 0);
    return RunsForRunPathParams;
}(utils_1.SpeakeasyBase));
exports.RunsForRunPathParams = RunsForRunPathParams;
var RunsForRunExpandEnum;
(function (RunsForRunExpandEnum) {
    RunsForRunExpandEnum["All"] = "All";
    RunsForRunExpandEnum["VehicleDescriptor"] = "VehicleDescriptor";
    RunsForRunExpandEnum["VehiclePosition"] = "VehiclePosition";
    RunsForRunExpandEnum["None"] = "None";
})(RunsForRunExpandEnum = exports.RunsForRunExpandEnum || (exports.RunsForRunExpandEnum = {}));
var RunsForRunQueryParams = /** @class */ (function (_super) {
    __extends(RunsForRunQueryParams, _super);
    function RunsForRunQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=date_utc" }),
        __metadata("design:type", Date)
    ], RunsForRunQueryParams.prototype, "dateUtc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=devid" }),
        __metadata("design:type", String)
    ], RunsForRunQueryParams.prototype, "devid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=expand" }),
        __metadata("design:type", Array)
    ], RunsForRunQueryParams.prototype, "expand", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=include_geopath" }),
        __metadata("design:type", Boolean)
    ], RunsForRunQueryParams.prototype, "includeGeopath", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=signature" }),
        __metadata("design:type", String)
    ], RunsForRunQueryParams.prototype, "signature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], RunsForRunQueryParams.prototype, "token", void 0);
    return RunsForRunQueryParams;
}(utils_1.SpeakeasyBase));
exports.RunsForRunQueryParams = RunsForRunQueryParams;
var RunsForRunRequest = /** @class */ (function (_super) {
    __extends(RunsForRunRequest, _super);
    function RunsForRunRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RunsForRunPathParams)
    ], RunsForRunRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RunsForRunQueryParams)
    ], RunsForRunRequest.prototype, "queryParams", void 0);
    return RunsForRunRequest;
}(utils_1.SpeakeasyBase));
exports.RunsForRunRequest = RunsForRunRequest;
var RunsForRunResponse = /** @class */ (function (_super) {
    __extends(RunsForRunResponse, _super);
    function RunsForRunResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], RunsForRunResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RunsForRunResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RunsForRunResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.V3ErrorResponse)
    ], RunsForRunResponse.prototype, "v3ErrorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.V3RunsResponse)
    ], RunsForRunResponse.prototype, "v3RunsResponse", void 0);
    return RunsForRunResponse;
}(utils_1.SpeakeasyBase));
exports.RunsForRunResponse = RunsForRunResponse;
