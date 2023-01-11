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
exports.IpBlocklistResponse = void 0;
var utils_1 = require("../../../internal/utils");
var IpBlocklistResponse = /** @class */ (function (_super) {
    __extends(IpBlocklistResponse, _super);
    function IpBlocklistResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=blocklists" }),
        __metadata("design:type", Array)
    ], IpBlocklistResponse.prototype, "blocklists", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], IpBlocklistResponse.prototype, "ip", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isBot" }),
        __metadata("design:type", Boolean)
    ], IpBlocklistResponse.prototype, "isBot", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isDshield" }),
        __metadata("design:type", Boolean)
    ], IpBlocklistResponse.prototype, "isDshield", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isExploitBot" }),
        __metadata("design:type", Boolean)
    ], IpBlocklistResponse.prototype, "isExploitBot", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isHijacked" }),
        __metadata("design:type", Boolean)
    ], IpBlocklistResponse.prototype, "isHijacked", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isListed" }),
        __metadata("design:type", Boolean)
    ], IpBlocklistResponse.prototype, "isListed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isMalware" }),
        __metadata("design:type", Boolean)
    ], IpBlocklistResponse.prototype, "isMalware", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isProxy" }),
        __metadata("design:type", Boolean)
    ], IpBlocklistResponse.prototype, "isProxy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isSpamBot" }),
        __metadata("design:type", Boolean)
    ], IpBlocklistResponse.prototype, "isSpamBot", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isSpider" }),
        __metadata("design:type", Boolean)
    ], IpBlocklistResponse.prototype, "isSpider", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isSpyware" }),
        __metadata("design:type", Boolean)
    ], IpBlocklistResponse.prototype, "isSpyware", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isTor" }),
        __metadata("design:type", Boolean)
    ], IpBlocklistResponse.prototype, "isTor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isVpn" }),
        __metadata("design:type", Boolean)
    ], IpBlocklistResponse.prototype, "isVpn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastSeen" }),
        __metadata("design:type", Number)
    ], IpBlocklistResponse.prototype, "lastSeen", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=listCount" }),
        __metadata("design:type", Number)
    ], IpBlocklistResponse.prototype, "listCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sensors" }),
        __metadata("design:type", Array)
    ], IpBlocklistResponse.prototype, "sensors", void 0);
    return IpBlocklistResponse;
}(utils_1.SpeakeasyBase));
exports.IpBlocklistResponse = IpBlocklistResponse;
