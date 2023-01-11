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
exports.FindFormByFormNameResponse = exports.FindFormByFormNameRequest = exports.FindFormByFormName404ApplicationJson = exports.FindFormByFormName200ApplicationJson = exports.FindFormByFormNameSecurity = exports.FindFormByFormNamePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var FindFormByFormNamePathParams = /** @class */ (function (_super) {
    __extends(FindFormByFormNamePathParams, _super);
    function FindFormByFormNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=form_name" }),
        __metadata("design:type", String)
    ], FindFormByFormNamePathParams.prototype, "formName", void 0);
    return FindFormByFormNamePathParams;
}(utils_1.SpeakeasyBase));
exports.FindFormByFormNamePathParams = FindFormByFormNamePathParams;
var FindFormByFormNameSecurity = /** @class */ (function (_super) {
    __extends(FindFormByFormNameSecurity, _super);
    function FindFormByFormNameSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApikey)
    ], FindFormByFormNameSecurity.prototype, "apikey", void 0);
    return FindFormByFormNameSecurity;
}(utils_1.SpeakeasyBase));
exports.FindFormByFormNameSecurity = FindFormByFormNameSecurity;
var FindFormByFormName200ApplicationJson = /** @class */ (function (_super) {
    __extends(FindFormByFormName200ApplicationJson, _super);
    function FindFormByFormName200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], FindFormByFormName200ApplicationJson.prototype, "data", void 0);
    return FindFormByFormName200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.FindFormByFormName200ApplicationJson = FindFormByFormName200ApplicationJson;
var FindFormByFormName404ApplicationJson = /** @class */ (function (_super) {
    __extends(FindFormByFormName404ApplicationJson, _super);
    function FindFormByFormName404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errors" }),
        __metadata("design:type", Array)
    ], FindFormByFormName404ApplicationJson.prototype, "errors", void 0);
    return FindFormByFormName404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.FindFormByFormName404ApplicationJson = FindFormByFormName404ApplicationJson;
var FindFormByFormNameRequest = /** @class */ (function (_super) {
    __extends(FindFormByFormNameRequest, _super);
    function FindFormByFormNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FindFormByFormNamePathParams)
    ], FindFormByFormNameRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FindFormByFormNameSecurity)
    ], FindFormByFormNameRequest.prototype, "security", void 0);
    return FindFormByFormNameRequest;
}(utils_1.SpeakeasyBase));
exports.FindFormByFormNameRequest = FindFormByFormNameRequest;
var FindFormByFormNameResponse = /** @class */ (function (_super) {
    __extends(FindFormByFormNameResponse, _super);
    function FindFormByFormNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], FindFormByFormNameResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], FindFormByFormNameResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FindFormByFormName200ApplicationJson)
    ], FindFormByFormNameResponse.prototype, "findFormByFormName200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], FindFormByFormNameResponse.prototype, "findFormByFormName401ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FindFormByFormName404ApplicationJson)
    ], FindFormByFormNameResponse.prototype, "findFormByFormName404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], FindFormByFormNameResponse.prototype, "findFormByFormName429ApplicationJSONAny", void 0);
    return FindFormByFormNameResponse;
}(utils_1.SpeakeasyBase));
exports.FindFormByFormNameResponse = FindFormByFormNameResponse;
