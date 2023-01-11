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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOntologyTermGraphResponse = exports.GetOntologyTermGraphRequest = exports.GetOntologyTermGraphQueryParams = exports.GetOntologyTermGraphGraphTypeEnum = exports.GetOntologyTermGraphPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetOntologyTermGraphPathParams = /** @class */ (function (_super) {
    __extends(GetOntologyTermGraphPathParams, _super);
    function GetOntologyTermGraphPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetOntologyTermGraphPathParams.prototype, "id", void 0);
    return GetOntologyTermGraphPathParams;
}(utils_1.SpeakeasyBase));
exports.GetOntologyTermGraphPathParams = GetOntologyTermGraphPathParams;
var GetOntologyTermGraphGraphTypeEnum;
(function (GetOntologyTermGraphGraphTypeEnum) {
    GetOntologyTermGraphGraphTypeEnum["TopologyGraph"] = "topology_graph";
    GetOntologyTermGraphGraphTypeEnum["RegulatesTransitivityGraph"] = "regulates_transitivity_graph";
    GetOntologyTermGraphGraphTypeEnum["NeighborhoodGraph"] = "neighborhood_graph";
    GetOntologyTermGraphGraphTypeEnum["NeighborhoodLimitedGraph"] = "neighborhood_limited_graph";
})(GetOntologyTermGraphGraphTypeEnum = exports.GetOntologyTermGraphGraphTypeEnum || (exports.GetOntologyTermGraphGraphTypeEnum = {}));
var GetOntologyTermGraphQueryParams = /** @class */ (function (_super) {
    __extends(GetOntologyTermGraphQueryParams, _super);
    function GetOntologyTermGraphQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=graph_type" }),
        __metadata("design:type", String)
    ], GetOntologyTermGraphQueryParams.prototype, "graphType", void 0);
    return GetOntologyTermGraphQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetOntologyTermGraphQueryParams = GetOntologyTermGraphQueryParams;
var GetOntologyTermGraphRequest = /** @class */ (function (_super) {
    __extends(GetOntologyTermGraphRequest, _super);
    function GetOntologyTermGraphRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetOntologyTermGraphPathParams)
    ], GetOntologyTermGraphRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetOntologyTermGraphQueryParams)
    ], GetOntologyTermGraphRequest.prototype, "queryParams", void 0);
    return GetOntologyTermGraphRequest;
}(utils_1.SpeakeasyBase));
exports.GetOntologyTermGraphRequest = GetOntologyTermGraphRequest;
var GetOntologyTermGraphResponse = /** @class */ (function (_super) {
    __extends(GetOntologyTermGraphResponse, _super);
    function GetOntologyTermGraphResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetOntologyTermGraphResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetOntologyTermGraphResponse.prototype, "statusCode", void 0);
    return GetOntologyTermGraphResponse;
}(utils_1.SpeakeasyBase));
exports.GetOntologyTermGraphResponse = GetOntologyTermGraphResponse;
