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
exports.FileWatcherStopResponse = exports.FileWatcherStop200ApplicationJson = exports.FileWatcherStop200ApplicationJsonResultEnum = exports.FileWatcherStop200ApplicationJsonActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var FileWatcherStop200ApplicationJsonActionEnum;
(function (FileWatcherStop200ApplicationJsonActionEnum) {
    FileWatcherStop200ApplicationJsonActionEnum["FileWatcherStop"] = "fileWatcherStop";
})(FileWatcherStop200ApplicationJsonActionEnum = exports.FileWatcherStop200ApplicationJsonActionEnum || (exports.FileWatcherStop200ApplicationJsonActionEnum = {}));
var FileWatcherStop200ApplicationJsonResultEnum;
(function (FileWatcherStop200ApplicationJsonResultEnum) {
    FileWatcherStop200ApplicationJsonResultEnum["Success"] = "success";
    FileWatcherStop200ApplicationJsonResultEnum["Error"] = "error";
})(FileWatcherStop200ApplicationJsonResultEnum = exports.FileWatcherStop200ApplicationJsonResultEnum || (exports.FileWatcherStop200ApplicationJsonResultEnum = {}));
var FileWatcherStop200ApplicationJson = /** @class */ (function (_super) {
    __extends(FileWatcherStop200ApplicationJson, _super);
    function FileWatcherStop200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], FileWatcherStop200ApplicationJson.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", String)
    ], FileWatcherStop200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], FileWatcherStop200ApplicationJson.prototype, "result", void 0);
    return FileWatcherStop200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.FileWatcherStop200ApplicationJson = FileWatcherStop200ApplicationJson;
var FileWatcherStopResponse = /** @class */ (function (_super) {
    __extends(FileWatcherStopResponse, _super);
    function FileWatcherStopResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], FileWatcherStopResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], FileWatcherStopResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FileWatcherStop200ApplicationJson)
    ], FileWatcherStopResponse.prototype, "fileWatcherStop200ApplicationJSONObject", void 0);
    return FileWatcherStopResponse;
}(utils_1.SpeakeasyBase));
exports.FileWatcherStopResponse = FileWatcherStopResponse;
