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
exports.AttestationOccurrence = void 0;
var utils_1 = require("../../../internal/utils");
var jwt_1 = require("./jwt");
var signature_1 = require("./signature");
// AttestationOccurrence
/**
 * Occurrence that represents a single "attestation". The authenticity of an attestation can be verified using the attached signature. If the verifier trusts the public key of the signer, then verifying the signature is sufficient to establish trust. In this circumstance, the authority to which this attestation is attached is primarily useful for lookup (how to find this attestation if you already know the authority and artifact to be verified) and intent (for which authority this attestation was intended to sign.
**/
var AttestationOccurrence = /** @class */ (function (_super) {
    __extends(AttestationOccurrence, _super);
    function AttestationOccurrence() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jwts", elemType: jwt_1.Jwt }),
        __metadata("design:type", Array)
    ], AttestationOccurrence.prototype, "jwts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serializedPayload" }),
        __metadata("design:type", String)
    ], AttestationOccurrence.prototype, "serializedPayload", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=signatures", elemType: signature_1.Signature }),
        __metadata("design:type", Array)
    ], AttestationOccurrence.prototype, "signatures", void 0);
    return AttestationOccurrence;
}(utils_1.SpeakeasyBase));
exports.AttestationOccurrence = AttestationOccurrence;
