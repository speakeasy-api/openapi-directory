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
exports.ListPendingNodesResponse = exports.ListPendingNodesRequest = exports.ListPendingNodes200ApplicationJson = exports.ListPendingNodes200ApplicationJsonResultEnum = exports.ListPendingNodes200ApplicationJsonData = exports.ListPendingNodes200ApplicationJsonActionEnum = exports.ListPendingNodesQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListPendingNodesQueryParams = /** @class */ (function (_super) {
    __extends(ListPendingNodesQueryParams, _super);
    function ListPendingNodesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=composition" }),
        __metadata("design:type", String)
    ], ListPendingNodesQueryParams.prototype, "composition", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=include" }),
        __metadata("design:type", String)
    ], ListPendingNodesQueryParams.prototype, "include", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, serialization=json;name=query" }),
        __metadata("design:type", shared.NodeQuery)
    ], ListPendingNodesQueryParams.prototype, "query", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=select" }),
        __metadata("design:type", String)
    ], ListPendingNodesQueryParams.prototype, "select", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, serialization=json;name=where", elemType: shared.NodeWhere }),
        __metadata("design:type", Array)
    ], ListPendingNodesQueryParams.prototype, "where", void 0);
    return ListPendingNodesQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListPendingNodesQueryParams = ListPendingNodesQueryParams;
var ListPendingNodes200ApplicationJsonActionEnum;
(function (ListPendingNodes200ApplicationJsonActionEnum) {
    ListPendingNodes200ApplicationJsonActionEnum["ListPendingNodes"] = "listPendingNodes";
})(ListPendingNodes200ApplicationJsonActionEnum = exports.ListPendingNodes200ApplicationJsonActionEnum || (exports.ListPendingNodes200ApplicationJsonActionEnum = {}));
// ListPendingNodes200ApplicationJsonData
/**
 * Information about the nodes
**/
var ListPendingNodes200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(ListPendingNodes200ApplicationJsonData, _super);
    function ListPendingNodes200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nodes", elemType: shared.NodeFull }),
        __metadata("design:type", Array)
    ], ListPendingNodes200ApplicationJsonData.prototype, "nodes", void 0);
    return ListPendingNodes200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.ListPendingNodes200ApplicationJsonData = ListPendingNodes200ApplicationJsonData;
var ListPendingNodes200ApplicationJsonResultEnum;
(function (ListPendingNodes200ApplicationJsonResultEnum) {
    ListPendingNodes200ApplicationJsonResultEnum["Success"] = "success";
    ListPendingNodes200ApplicationJsonResultEnum["Error"] = "error";
})(ListPendingNodes200ApplicationJsonResultEnum = exports.ListPendingNodes200ApplicationJsonResultEnum || (exports.ListPendingNodes200ApplicationJsonResultEnum = {}));
var ListPendingNodes200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListPendingNodes200ApplicationJson, _super);
    function ListPendingNodes200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], ListPendingNodes200ApplicationJson.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", ListPendingNodes200ApplicationJsonData)
    ], ListPendingNodes200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], ListPendingNodes200ApplicationJson.prototype, "result", void 0);
    return ListPendingNodes200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListPendingNodes200ApplicationJson = ListPendingNodes200ApplicationJson;
var ListPendingNodesRequest = /** @class */ (function (_super) {
    __extends(ListPendingNodesRequest, _super);
    function ListPendingNodesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListPendingNodesQueryParams)
    ], ListPendingNodesRequest.prototype, "queryParams", void 0);
    return ListPendingNodesRequest;
}(utils_1.SpeakeasyBase));
exports.ListPendingNodesRequest = ListPendingNodesRequest;
var ListPendingNodesResponse = /** @class */ (function (_super) {
    __extends(ListPendingNodesResponse, _super);
    function ListPendingNodesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListPendingNodesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListPendingNodesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListPendingNodes200ApplicationJson)
    ], ListPendingNodesResponse.prototype, "listPendingNodes200ApplicationJSONObject", void 0);
    return ListPendingNodesResponse;
}(utils_1.SpeakeasyBase));
exports.ListPendingNodesResponse = ListPendingNodesResponse;
