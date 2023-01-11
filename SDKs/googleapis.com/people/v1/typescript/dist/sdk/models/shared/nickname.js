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
exports.NicknameInput = exports.Nickname = exports.NicknameTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var fieldmetadata_1 = require("./fieldmetadata");
var fieldmetadata_2 = require("./fieldmetadata");
var NicknameTypeEnum;
(function (NicknameTypeEnum) {
    NicknameTypeEnum["Default"] = "DEFAULT";
    NicknameTypeEnum["MaidenName"] = "MAIDEN_NAME";
    NicknameTypeEnum["Initials"] = "INITIALS";
    NicknameTypeEnum["Gplus"] = "GPLUS";
    NicknameTypeEnum["OtherName"] = "OTHER_NAME";
    NicknameTypeEnum["AlternateName"] = "ALTERNATE_NAME";
    NicknameTypeEnum["ShortName"] = "SHORT_NAME";
})(NicknameTypeEnum = exports.NicknameTypeEnum || (exports.NicknameTypeEnum = {}));
// Nickname
/**
 * A person's nickname.
**/
var Nickname = /** @class */ (function (_super) {
    __extends(Nickname, _super);
    function Nickname() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metadata" }),
        __metadata("design:type", fieldmetadata_1.FieldMetadata)
    ], Nickname.prototype, "metadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Nickname.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], Nickname.prototype, "value", void 0);
    return Nickname;
}(utils_1.SpeakeasyBase));
exports.Nickname = Nickname;
// NicknameInput
/**
 * A person's nickname.
**/
var NicknameInput = /** @class */ (function (_super) {
    __extends(NicknameInput, _super);
    function NicknameInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metadata" }),
        __metadata("design:type", fieldmetadata_2.FieldMetadataInput)
    ], NicknameInput.prototype, "metadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], NicknameInput.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], NicknameInput.prototype, "value", void 0);
    return NicknameInput;
}(utils_1.SpeakeasyBase));
exports.NicknameInput = NicknameInput;
