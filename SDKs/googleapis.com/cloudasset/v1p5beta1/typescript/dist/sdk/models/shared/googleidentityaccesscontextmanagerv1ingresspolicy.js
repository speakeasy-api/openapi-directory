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
exports.GoogleIdentityAccesscontextmanagerV1IngressPolicy = void 0;
var utils_1 = require("../../../internal/utils");
var googleidentityaccesscontextmanagerv1ingressfrom_1 = require("./googleidentityaccesscontextmanagerv1ingressfrom");
var googleidentityaccesscontextmanagerv1ingressto_1 = require("./googleidentityaccesscontextmanagerv1ingressto");
// GoogleIdentityAccesscontextmanagerV1IngressPolicy
/**
 * Policy for ingress into ServicePerimeter. IngressPolicies match requests based on `ingress_from` and `ingress_to` stanzas. For an ingress policy to match, both the `ingress_from` and `ingress_to` stanzas must be matched. If an IngressPolicy matches a request, the request is allowed through the perimeter boundary from outside the perimeter. For example, access from the internet can be allowed either based on an AccessLevel or, for traffic hosted on Google Cloud, the project of the source network. For access from private networks, using the project of the hosting network is required. Individual ingress policies can be limited by restricting which services and/or actions they match using the `ingress_to` field.
**/
var GoogleIdentityAccesscontextmanagerV1IngressPolicy = /** @class */ (function (_super) {
    __extends(GoogleIdentityAccesscontextmanagerV1IngressPolicy, _super);
    function GoogleIdentityAccesscontextmanagerV1IngressPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ingressFrom" }),
        __metadata("design:type", googleidentityaccesscontextmanagerv1ingressfrom_1.GoogleIdentityAccesscontextmanagerV1IngressFrom)
    ], GoogleIdentityAccesscontextmanagerV1IngressPolicy.prototype, "ingressFrom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ingressTo" }),
        __metadata("design:type", googleidentityaccesscontextmanagerv1ingressto_1.GoogleIdentityAccesscontextmanagerV1IngressTo)
    ], GoogleIdentityAccesscontextmanagerV1IngressPolicy.prototype, "ingressTo", void 0);
    return GoogleIdentityAccesscontextmanagerV1IngressPolicy;
}(utils_1.SpeakeasyBase));
exports.GoogleIdentityAccesscontextmanagerV1IngressPolicy = GoogleIdentityAccesscontextmanagerV1IngressPolicy;
