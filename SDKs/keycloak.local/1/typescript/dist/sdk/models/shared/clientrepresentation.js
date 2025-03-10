"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.ClientRepresentation = void 0;
var utils_1 = require("../../../internal/utils");
var protocolmapperrepresentation_1 = require("./protocolmapperrepresentation");
var resourceserverrepresentation_1 = require("./resourceserverrepresentation");
var class_transformer_1 = require("class-transformer");
/**
 * success
 */
var ClientRepresentation = /** @class */ (function (_super) {
    __extends(ClientRepresentation, _super);
    function ClientRepresentation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "access" }),
        __metadata("design:type", Object)
    ], ClientRepresentation.prototype, "access", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "adminUrl" }),
        __metadata("design:type", String)
    ], ClientRepresentation.prototype, "adminUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "alwaysDisplayInConsole" }),
        __metadata("design:type", Boolean)
    ], ClientRepresentation.prototype, "alwaysDisplayInConsole", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "attributes" }),
        __metadata("design:type", Object)
    ], ClientRepresentation.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "authenticationFlowBindingOverrides" }),
        __metadata("design:type", Object)
    ], ClientRepresentation.prototype, "authenticationFlowBindingOverrides", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "authorizationServicesEnabled" }),
        __metadata("design:type", Boolean)
    ], ClientRepresentation.prototype, "authorizationServicesEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "authorizationSettings" }),
        (0, class_transformer_1.Type)(function () { return resourceserverrepresentation_1.ResourceServerRepresentation; }),
        __metadata("design:type", resourceserverrepresentation_1.ResourceServerRepresentation)
    ], ClientRepresentation.prototype, "authorizationSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "baseUrl" }),
        __metadata("design:type", String)
    ], ClientRepresentation.prototype, "baseUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "bearerOnly" }),
        __metadata("design:type", Boolean)
    ], ClientRepresentation.prototype, "bearerOnly", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "clientAuthenticatorType" }),
        __metadata("design:type", String)
    ], ClientRepresentation.prototype, "clientAuthenticatorType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "clientId" }),
        __metadata("design:type", String)
    ], ClientRepresentation.prototype, "clientId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "consentRequired" }),
        __metadata("design:type", Boolean)
    ], ClientRepresentation.prototype, "consentRequired", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "defaultClientScopes" }),
        __metadata("design:type", Array)
    ], ClientRepresentation.prototype, "defaultClientScopes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "defaultRoles" }),
        __metadata("design:type", Array)
    ], ClientRepresentation.prototype, "defaultRoles", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "description" }),
        __metadata("design:type", String)
    ], ClientRepresentation.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "directAccessGrantsEnabled" }),
        __metadata("design:type", Boolean)
    ], ClientRepresentation.prototype, "directAccessGrantsEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "enabled" }),
        __metadata("design:type", Boolean)
    ], ClientRepresentation.prototype, "enabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "frontchannelLogout" }),
        __metadata("design:type", Boolean)
    ], ClientRepresentation.prototype, "frontchannelLogout", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "fullScopeAllowed" }),
        __metadata("design:type", Boolean)
    ], ClientRepresentation.prototype, "fullScopeAllowed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "id" }),
        __metadata("design:type", String)
    ], ClientRepresentation.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "implicitFlowEnabled" }),
        __metadata("design:type", Boolean)
    ], ClientRepresentation.prototype, "implicitFlowEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "name" }),
        __metadata("design:type", String)
    ], ClientRepresentation.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "nodeReRegistrationTimeout" }),
        __metadata("design:type", Number)
    ], ClientRepresentation.prototype, "nodeReRegistrationTimeout", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "notBefore" }),
        __metadata("design:type", Number)
    ], ClientRepresentation.prototype, "notBefore", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "optionalClientScopes" }),
        __metadata("design:type", Array)
    ], ClientRepresentation.prototype, "optionalClientScopes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "origin" }),
        __metadata("design:type", String)
    ], ClientRepresentation.prototype, "origin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "protocol" }),
        __metadata("design:type", String)
    ], ClientRepresentation.prototype, "protocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: protocolmapperrepresentation_1.ProtocolMapperRepresentation }),
        (0, class_transformer_1.Expose)({ name: "protocolMappers" }),
        (0, class_transformer_1.Type)(function () { return protocolmapperrepresentation_1.ProtocolMapperRepresentation; }),
        __metadata("design:type", Array)
    ], ClientRepresentation.prototype, "protocolMappers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "publicClient" }),
        __metadata("design:type", Boolean)
    ], ClientRepresentation.prototype, "publicClient", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "redirectUris" }),
        __metadata("design:type", Array)
    ], ClientRepresentation.prototype, "redirectUris", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "registeredNodes" }),
        __metadata("design:type", Object)
    ], ClientRepresentation.prototype, "registeredNodes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "registrationAccessToken" }),
        __metadata("design:type", String)
    ], ClientRepresentation.prototype, "registrationAccessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "rootUrl" }),
        __metadata("design:type", String)
    ], ClientRepresentation.prototype, "rootUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "secret" }),
        __metadata("design:type", String)
    ], ClientRepresentation.prototype, "secret", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "serviceAccountsEnabled" }),
        __metadata("design:type", Boolean)
    ], ClientRepresentation.prototype, "serviceAccountsEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "standardFlowEnabled" }),
        __metadata("design:type", Boolean)
    ], ClientRepresentation.prototype, "standardFlowEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "surrogateAuthRequired" }),
        __metadata("design:type", Boolean)
    ], ClientRepresentation.prototype, "surrogateAuthRequired", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "webOrigins" }),
        __metadata("design:type", Array)
    ], ClientRepresentation.prototype, "webOrigins", void 0);
    return ClientRepresentation;
}(utils_1.SpeakeasyBase));
exports.ClientRepresentation = ClientRepresentation;
