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
exports.GetUsersUserEmailOfferingsOfferingIdProgressResponse = exports.GetUsersUserEmailOfferingsOfferingIdProgressRequest = exports.GetUsersUserEmailOfferingsOfferingIdProgress200ApplicationJson = exports.GetUsersUserEmailOfferingsOfferingIdProgressPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetUsersUserEmailOfferingsOfferingIdProgressPathParams = /** @class */ (function (_super) {
    __extends(GetUsersUserEmailOfferingsOfferingIdProgressPathParams, _super);
    function GetUsersUserEmailOfferingsOfferingIdProgressPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=offeringId" }),
        __metadata("design:type", String)
    ], GetUsersUserEmailOfferingsOfferingIdProgressPathParams.prototype, "offeringId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userEmail" }),
        __metadata("design:type", String)
    ], GetUsersUserEmailOfferingsOfferingIdProgressPathParams.prototype, "userEmail", void 0);
    return GetUsersUserEmailOfferingsOfferingIdProgressPathParams;
}(utils_1.SpeakeasyBase));
exports.GetUsersUserEmailOfferingsOfferingIdProgressPathParams = GetUsersUserEmailOfferingsOfferingIdProgressPathParams;
var GetUsersUserEmailOfferingsOfferingIdProgress200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetUsersUserEmailOfferingsOfferingIdProgress200ApplicationJson, _super);
    function GetUsersUserEmailOfferingsOfferingIdProgress200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=completion" }),
        __metadata("design:type", String)
    ], GetUsersUserEmailOfferingsOfferingIdProgress200ApplicationJson.prototype, "completion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], GetUsersUserEmailOfferingsOfferingIdProgress200ApplicationJson.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=firstName" }),
        __metadata("design:type", String)
    ], GetUsersUserEmailOfferingsOfferingIdProgress200ApplicationJson.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetUsersUserEmailOfferingsOfferingIdProgress200ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastName" }),
        __metadata("design:type", String)
    ], GetUsersUserEmailOfferingsOfferingIdProgress200ApplicationJson.prototype, "lastName", void 0);
    return GetUsersUserEmailOfferingsOfferingIdProgress200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetUsersUserEmailOfferingsOfferingIdProgress200ApplicationJson = GetUsersUserEmailOfferingsOfferingIdProgress200ApplicationJson;
var GetUsersUserEmailOfferingsOfferingIdProgressRequest = /** @class */ (function (_super) {
    __extends(GetUsersUserEmailOfferingsOfferingIdProgressRequest, _super);
    function GetUsersUserEmailOfferingsOfferingIdProgressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUsersUserEmailOfferingsOfferingIdProgressPathParams)
    ], GetUsersUserEmailOfferingsOfferingIdProgressRequest.prototype, "pathParams", void 0);
    return GetUsersUserEmailOfferingsOfferingIdProgressRequest;
}(utils_1.SpeakeasyBase));
exports.GetUsersUserEmailOfferingsOfferingIdProgressRequest = GetUsersUserEmailOfferingsOfferingIdProgressRequest;
var GetUsersUserEmailOfferingsOfferingIdProgressResponse = /** @class */ (function (_super) {
    __extends(GetUsersUserEmailOfferingsOfferingIdProgressResponse, _super);
    function GetUsersUserEmailOfferingsOfferingIdProgressResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetUsersUserEmailOfferingsOfferingIdProgressResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorT)
    ], GetUsersUserEmailOfferingsOfferingIdProgressResponse.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetUsersUserEmailOfferingsOfferingIdProgressResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUsersUserEmailOfferingsOfferingIdProgress200ApplicationJson)
    ], GetUsersUserEmailOfferingsOfferingIdProgressResponse.prototype, "getUsersUserEmailOfferingsOfferingIdProgress200ApplicationJSONObject", void 0);
    return GetUsersUserEmailOfferingsOfferingIdProgressResponse;
}(utils_1.SpeakeasyBase));
exports.GetUsersUserEmailOfferingsOfferingIdProgressResponse = GetUsersUserEmailOfferingsOfferingIdProgressResponse;
