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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CredentialEnumPushServiceEnum } from "./credentialenumpushserviceenum";
var ChatV1Credential = /** @class */ (function (_super) {
    __extends(ChatV1Credential, _super);
    function ChatV1Credential() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], ChatV1Credential.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], ChatV1Credential.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], ChatV1Credential.prototype, "dateUpdated", void 0);
    __decorate([
        Metadata({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], ChatV1Credential.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "json, name=sandbox" }),
        __metadata("design:type", String)
    ], ChatV1Credential.prototype, "sandbox", void 0);
    __decorate([
        Metadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], ChatV1Credential.prototype, "sid", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ChatV1Credential.prototype, "type", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ChatV1Credential.prototype, "url", void 0);
    return ChatV1Credential;
}(SpeakeasyBase));
export { ChatV1Credential };
