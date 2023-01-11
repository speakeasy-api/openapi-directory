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
exports.NodeDetailsResponse = exports.NodeDetailsRequest = exports.NodeDetails200ApplicationJson = exports.NodeDetails200ApplicationJsonResultEnum = exports.NodeDetails200ApplicationJsonData = exports.NodeDetails200ApplicationJsonActionEnum = exports.NodeDetailsQueryParams = exports.NodeDetailsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var NodeDetailsPathParams = /** @class */ (function (_super) {
    __extends(NodeDetailsPathParams, _super);
    function NodeDetailsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=nodeId" }),
        __metadata("design:type", String)
    ], NodeDetailsPathParams.prototype, "nodeId", void 0);
    return NodeDetailsPathParams;
}(utils_1.SpeakeasyBase));
exports.NodeDetailsPathParams = NodeDetailsPathParams;
var NodeDetailsQueryParams = /** @class */ (function (_super) {
    __extends(NodeDetailsQueryParams, _super);
    function NodeDetailsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=include" }),
        __metadata("design:type", String)
    ], NodeDetailsQueryParams.prototype, "include", void 0);
    return NodeDetailsQueryParams;
}(utils_1.SpeakeasyBase));
exports.NodeDetailsQueryParams = NodeDetailsQueryParams;
var NodeDetails200ApplicationJsonActionEnum;
(function (NodeDetails200ApplicationJsonActionEnum) {
    NodeDetails200ApplicationJsonActionEnum["NodeDetails"] = "nodeDetails";
})(NodeDetails200ApplicationJsonActionEnum = exports.NodeDetails200ApplicationJsonActionEnum || (exports.NodeDetails200ApplicationJsonActionEnum = {}));
// NodeDetails200ApplicationJsonData
/**
 * Information about the node
**/
var NodeDetails200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(NodeDetails200ApplicationJsonData, _super);
    function NodeDetails200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nodes", elemType: shared.NodeFull }),
        __metadata("design:type", Array)
    ], NodeDetails200ApplicationJsonData.prototype, "nodes", void 0);
    return NodeDetails200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.NodeDetails200ApplicationJsonData = NodeDetails200ApplicationJsonData;
var NodeDetails200ApplicationJsonResultEnum;
(function (NodeDetails200ApplicationJsonResultEnum) {
    NodeDetails200ApplicationJsonResultEnum["Success"] = "success";
    NodeDetails200ApplicationJsonResultEnum["Error"] = "error";
})(NodeDetails200ApplicationJsonResultEnum = exports.NodeDetails200ApplicationJsonResultEnum || (exports.NodeDetails200ApplicationJsonResultEnum = {}));
var NodeDetails200ApplicationJson = /** @class */ (function (_super) {
    __extends(NodeDetails200ApplicationJson, _super);
    function NodeDetails200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], NodeDetails200ApplicationJson.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", NodeDetails200ApplicationJsonData)
    ], NodeDetails200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], NodeDetails200ApplicationJson.prototype, "result", void 0);
    return NodeDetails200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.NodeDetails200ApplicationJson = NodeDetails200ApplicationJson;
var NodeDetailsRequest = /** @class */ (function (_super) {
    __extends(NodeDetailsRequest, _super);
    function NodeDetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", NodeDetailsPathParams)
    ], NodeDetailsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", NodeDetailsQueryParams)
    ], NodeDetailsRequest.prototype, "queryParams", void 0);
    return NodeDetailsRequest;
}(utils_1.SpeakeasyBase));
exports.NodeDetailsRequest = NodeDetailsRequest;
var NodeDetailsResponse = /** @class */ (function (_super) {
    __extends(NodeDetailsResponse, _super);
    function NodeDetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], NodeDetailsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], NodeDetailsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", NodeDetails200ApplicationJson)
    ], NodeDetailsResponse.prototype, "nodeDetails200ApplicationJSONObject", void 0);
    return NodeDetailsResponse;
}(utils_1.SpeakeasyBase));
exports.NodeDetailsResponse = NodeDetailsResponse;
