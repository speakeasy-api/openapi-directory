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
exports.DeleteNodeResponse = exports.DeleteNodeRequest = exports.DeleteNode200ApplicationJson = exports.DeleteNode200ApplicationJsonResultEnum = exports.DeleteNode200ApplicationJsonData = exports.DeleteNode200ApplicationJsonActionEnum = exports.DeleteNodeQueryParams = exports.DeleteNodePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DeleteNodePathParams = /** @class */ (function (_super) {
    __extends(DeleteNodePathParams, _super);
    function DeleteNodePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=nodeId" }),
        __metadata("design:type", String)
    ], DeleteNodePathParams.prototype, "nodeId", void 0);
    return DeleteNodePathParams;
}(utils_1.SpeakeasyBase));
exports.DeleteNodePathParams = DeleteNodePathParams;
var DeleteNodeQueryParams = /** @class */ (function (_super) {
    __extends(DeleteNodeQueryParams, _super);
    function DeleteNodeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=mode" }),
        __metadata("design:type", String)
    ], DeleteNodeQueryParams.prototype, "mode", void 0);
    return DeleteNodeQueryParams;
}(utils_1.SpeakeasyBase));
exports.DeleteNodeQueryParams = DeleteNodeQueryParams;
var DeleteNode200ApplicationJsonActionEnum;
(function (DeleteNode200ApplicationJsonActionEnum) {
    DeleteNode200ApplicationJsonActionEnum["DeleteNode"] = "deleteNode";
})(DeleteNode200ApplicationJsonActionEnum = exports.DeleteNode200ApplicationJsonActionEnum || (exports.DeleteNode200ApplicationJsonActionEnum = {}));
// DeleteNode200ApplicationJsonData
/**
 * Information about the node
**/
var DeleteNode200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(DeleteNode200ApplicationJsonData, _super);
    function DeleteNode200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nodes", elemType: shared.NodeFull }),
        __metadata("design:type", Array)
    ], DeleteNode200ApplicationJsonData.prototype, "nodes", void 0);
    return DeleteNode200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.DeleteNode200ApplicationJsonData = DeleteNode200ApplicationJsonData;
var DeleteNode200ApplicationJsonResultEnum;
(function (DeleteNode200ApplicationJsonResultEnum) {
    DeleteNode200ApplicationJsonResultEnum["Success"] = "success";
    DeleteNode200ApplicationJsonResultEnum["Error"] = "error";
})(DeleteNode200ApplicationJsonResultEnum = exports.DeleteNode200ApplicationJsonResultEnum || (exports.DeleteNode200ApplicationJsonResultEnum = {}));
var DeleteNode200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteNode200ApplicationJson, _super);
    function DeleteNode200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], DeleteNode200ApplicationJson.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", DeleteNode200ApplicationJsonData)
    ], DeleteNode200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], DeleteNode200ApplicationJson.prototype, "result", void 0);
    return DeleteNode200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeleteNode200ApplicationJson = DeleteNode200ApplicationJson;
var DeleteNodeRequest = /** @class */ (function (_super) {
    __extends(DeleteNodeRequest, _super);
    function DeleteNodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteNodePathParams)
    ], DeleteNodeRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteNodeQueryParams)
    ], DeleteNodeRequest.prototype, "queryParams", void 0);
    return DeleteNodeRequest;
}(utils_1.SpeakeasyBase));
exports.DeleteNodeRequest = DeleteNodeRequest;
var DeleteNodeResponse = /** @class */ (function (_super) {
    __extends(DeleteNodeResponse, _super);
    function DeleteNodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteNodeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeleteNodeResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteNode200ApplicationJson)
    ], DeleteNodeResponse.prototype, "deleteNode200ApplicationJSONObject", void 0);
    return DeleteNodeResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteNodeResponse = DeleteNodeResponse;
