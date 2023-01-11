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
exports.SimplifiedShowObject = void 0;
var utils_1 = require("../../../internal/utils");
var copyrightobject_1 = require("./copyrightobject");
var externalurlobject_1 = require("./externalurlobject");
var imageobject_1 = require("./imageobject");
// SimplifiedShowObject
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-simplifiedshowobject - Find more info on the official Spotify Web API Reference
**/
var SimplifiedShowObject = /** @class */ (function (_super) {
    __extends(SimplifiedShowObject, _super);
    function SimplifiedShowObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=available_markets" }),
        __metadata("design:type", Array)
    ], SimplifiedShowObject.prototype, "availableMarkets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=copyrights", elemType: copyrightobject_1.CopyrightObject }),
        __metadata("design:type", Array)
    ], SimplifiedShowObject.prototype, "copyrights", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], SimplifiedShowObject.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=explicit" }),
        __metadata("design:type", Boolean)
    ], SimplifiedShowObject.prototype, "explicit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=external_urls" }),
        __metadata("design:type", externalurlobject_1.ExternalUrlObject)
    ], SimplifiedShowObject.prototype, "externalUrls", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], SimplifiedShowObject.prototype, "href", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=html_description" }),
        __metadata("design:type", String)
    ], SimplifiedShowObject.prototype, "htmlDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], SimplifiedShowObject.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=images", elemType: imageobject_1.ImageObject }),
        __metadata("design:type", Array)
    ], SimplifiedShowObject.prototype, "images", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_externally_hosted" }),
        __metadata("design:type", Boolean)
    ], SimplifiedShowObject.prototype, "isExternallyHosted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=languages" }),
        __metadata("design:type", Array)
    ], SimplifiedShowObject.prototype, "languages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=media_type" }),
        __metadata("design:type", String)
    ], SimplifiedShowObject.prototype, "mediaType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SimplifiedShowObject.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=publisher" }),
        __metadata("design:type", String)
    ], SimplifiedShowObject.prototype, "publisher", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], SimplifiedShowObject.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], SimplifiedShowObject.prototype, "uri", void 0);
    return SimplifiedShowObject;
}(utils_1.SpeakeasyBase));
exports.SimplifiedShowObject = SimplifiedShowObject;
