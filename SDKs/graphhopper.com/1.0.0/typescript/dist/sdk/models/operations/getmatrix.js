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
exports.GetMatrixResponse = exports.GetMatrixRequest = exports.GetMatrixQueryParams = exports.GetMatrixToCurbsideEnum = exports.GetMatrixFromCurbsideEnum = exports.GetMatrixCurbsideEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetMatrixCurbsideEnum;
(function (GetMatrixCurbsideEnum) {
    GetMatrixCurbsideEnum["Any"] = "any";
    GetMatrixCurbsideEnum["Right"] = "right";
    GetMatrixCurbsideEnum["Left"] = "left";
})(GetMatrixCurbsideEnum = exports.GetMatrixCurbsideEnum || (exports.GetMatrixCurbsideEnum = {}));
var GetMatrixFromCurbsideEnum;
(function (GetMatrixFromCurbsideEnum) {
    GetMatrixFromCurbsideEnum["Any"] = "any";
    GetMatrixFromCurbsideEnum["Right"] = "right";
    GetMatrixFromCurbsideEnum["Left"] = "left";
})(GetMatrixFromCurbsideEnum = exports.GetMatrixFromCurbsideEnum || (exports.GetMatrixFromCurbsideEnum = {}));
var GetMatrixToCurbsideEnum;
(function (GetMatrixToCurbsideEnum) {
    GetMatrixToCurbsideEnum["Any"] = "any";
    GetMatrixToCurbsideEnum["Right"] = "right";
    GetMatrixToCurbsideEnum["Left"] = "left";
})(GetMatrixToCurbsideEnum = exports.GetMatrixToCurbsideEnum || (exports.GetMatrixToCurbsideEnum = {}));
var GetMatrixQueryParams = /** @class */ (function (_super) {
    __extends(GetMatrixQueryParams, _super);
    function GetMatrixQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=curbside" }),
        __metadata("design:type", Array)
    ], GetMatrixQueryParams.prototype, "curbside", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fail_fast" }),
        __metadata("design:type", Boolean)
    ], GetMatrixQueryParams.prototype, "failFast", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=from_curbside" }),
        __metadata("design:type", Array)
    ], GetMatrixQueryParams.prototype, "fromCurbside", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=from_point" }),
        __metadata("design:type", Array)
    ], GetMatrixQueryParams.prototype, "fromPoint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=from_point_hint" }),
        __metadata("design:type", Array)
    ], GetMatrixQueryParams.prototype, "fromPointHint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=out_array" }),
        __metadata("design:type", Array)
    ], GetMatrixQueryParams.prototype, "outArray", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=point" }),
        __metadata("design:type", Array)
    ], GetMatrixQueryParams.prototype, "point", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=point_hint" }),
        __metadata("design:type", Array)
    ], GetMatrixQueryParams.prototype, "pointHint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=snap_prevention" }),
        __metadata("design:type", Array)
    ], GetMatrixQueryParams.prototype, "snapPrevention", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=to_curbside" }),
        __metadata("design:type", Array)
    ], GetMatrixQueryParams.prototype, "toCurbside", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=to_point" }),
        __metadata("design:type", Array)
    ], GetMatrixQueryParams.prototype, "toPoint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=to_point_hint" }),
        __metadata("design:type", Array)
    ], GetMatrixQueryParams.prototype, "toPointHint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=turn_costs" }),
        __metadata("design:type", Boolean)
    ], GetMatrixQueryParams.prototype, "turnCosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=vehicle" }),
        __metadata("design:type", String)
    ], GetMatrixQueryParams.prototype, "vehicle", void 0);
    return GetMatrixQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetMatrixQueryParams = GetMatrixQueryParams;
var GetMatrixRequest = /** @class */ (function (_super) {
    __extends(GetMatrixRequest, _super);
    function GetMatrixRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetMatrixQueryParams)
    ], GetMatrixRequest.prototype, "queryParams", void 0);
    return GetMatrixRequest;
}(utils_1.SpeakeasyBase));
exports.GetMatrixRequest = GetMatrixRequest;
var GetMatrixResponse = /** @class */ (function (_super) {
    __extends(GetMatrixResponse, _super);
    function GetMatrixResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetMatrixResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GhError)
    ], GetMatrixResponse.prototype, "ghError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetMatrixResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.MatrixResponse)
    ], GetMatrixResponse.prototype, "matrixResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetMatrixResponse.prototype, "statusCode", void 0);
    return GetMatrixResponse;
}(utils_1.SpeakeasyBase));
exports.GetMatrixResponse = GetMatrixResponse;
