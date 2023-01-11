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
exports.Source = void 0;
var utils_1 = require("../../../internal/utils");
var sourcecontext_1 = require("./sourcecontext");
var filehashes_1 = require("./filehashes");
// Source
/**
 * Source describes the location of the source used for the build.
**/
var Source = /** @class */ (function (_super) {
    __extends(Source, _super);
    function Source() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=additionalContexts", elemType: sourcecontext_1.SourceContext }),
        __metadata("design:type", Array)
    ], Source.prototype, "additionalContexts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=artifactStorageSourceUri" }),
        __metadata("design:type", String)
    ], Source.prototype, "artifactStorageSourceUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=context" }),
        __metadata("design:type", sourcecontext_1.SourceContext)
    ], Source.prototype, "context", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fileHashes", elemType: filehashes_1.FileHashes }),
        __metadata("design:type", Object)
    ], Source.prototype, "fileHashes", void 0);
    return Source;
}(utils_1.SpeakeasyBase));
exports.Source = Source;
