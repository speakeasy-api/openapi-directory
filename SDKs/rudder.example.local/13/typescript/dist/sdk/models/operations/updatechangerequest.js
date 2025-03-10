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
exports.UpdateChangeRequestResponse = exports.UpdateChangeRequestRequest = exports.UpdateChangeRequest200ApplicationJson = exports.UpdateChangeRequest200ApplicationJsonResultEnum = exports.UpdateChangeRequest200ApplicationJsonData = exports.UpdateChangeRequest200ApplicationJsonActionEnum = exports.UpdateChangeRequestRequestBody = exports.UpdateChangeRequestPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateChangeRequestPathParams = /** @class */ (function (_super) {
    __extends(UpdateChangeRequestPathParams, _super);
    function UpdateChangeRequestPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=changeRequestId" }),
        __metadata("design:type", Number)
    ], UpdateChangeRequestPathParams.prototype, "changeRequestId", void 0);
    return UpdateChangeRequestPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateChangeRequestPathParams = UpdateChangeRequestPathParams;
var UpdateChangeRequestRequestBody = /** @class */ (function (_super) {
    __extends(UpdateChangeRequestRequestBody, _super);
    function UpdateChangeRequestRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateChangeRequestRequestBody.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateChangeRequestRequestBody.prototype, "name", void 0);
    return UpdateChangeRequestRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateChangeRequestRequestBody = UpdateChangeRequestRequestBody;
var UpdateChangeRequest200ApplicationJsonActionEnum;
(function (UpdateChangeRequest200ApplicationJsonActionEnum) {
    UpdateChangeRequest200ApplicationJsonActionEnum["UpdateChangeRequest"] = "updateChangeRequest";
})(UpdateChangeRequest200ApplicationJsonActionEnum = exports.UpdateChangeRequest200ApplicationJsonActionEnum || (exports.UpdateChangeRequest200ApplicationJsonActionEnum = {}));
var UpdateChangeRequest200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(UpdateChangeRequest200ApplicationJsonData, _super);
    function UpdateChangeRequest200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rules", elemType: shared.ChangeRequest }),
        __metadata("design:type", Array)
    ], UpdateChangeRequest200ApplicationJsonData.prototype, "rules", void 0);
    return UpdateChangeRequest200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.UpdateChangeRequest200ApplicationJsonData = UpdateChangeRequest200ApplicationJsonData;
var UpdateChangeRequest200ApplicationJsonResultEnum;
(function (UpdateChangeRequest200ApplicationJsonResultEnum) {
    UpdateChangeRequest200ApplicationJsonResultEnum["Success"] = "success";
    UpdateChangeRequest200ApplicationJsonResultEnum["Error"] = "error";
})(UpdateChangeRequest200ApplicationJsonResultEnum = exports.UpdateChangeRequest200ApplicationJsonResultEnum || (exports.UpdateChangeRequest200ApplicationJsonResultEnum = {}));
var UpdateChangeRequest200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateChangeRequest200ApplicationJson, _super);
    function UpdateChangeRequest200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], UpdateChangeRequest200ApplicationJson.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", UpdateChangeRequest200ApplicationJsonData)
    ], UpdateChangeRequest200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], UpdateChangeRequest200ApplicationJson.prototype, "result", void 0);
    return UpdateChangeRequest200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateChangeRequest200ApplicationJson = UpdateChangeRequest200ApplicationJson;
var UpdateChangeRequestRequest = /** @class */ (function (_super) {
    __extends(UpdateChangeRequestRequest, _super);
    function UpdateChangeRequestRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateChangeRequestPathParams)
    ], UpdateChangeRequestRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateChangeRequestRequestBody)
    ], UpdateChangeRequestRequest.prototype, "request", void 0);
    return UpdateChangeRequestRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateChangeRequestRequest = UpdateChangeRequestRequest;
var UpdateChangeRequestResponse = /** @class */ (function (_super) {
    __extends(UpdateChangeRequestResponse, _super);
    function UpdateChangeRequestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateChangeRequestResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateChangeRequestResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateChangeRequest200ApplicationJson)
    ], UpdateChangeRequestResponse.prototype, "updateChangeRequest200ApplicationJSONObject", void 0);
    return UpdateChangeRequestResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateChangeRequestResponse = UpdateChangeRequestResponse;
