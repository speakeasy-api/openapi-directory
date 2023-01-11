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
exports.SubscriptionsApiPutSubscription2Response = exports.SubscriptionsApiPutSubscription2Request = void 0;
var utils_1 = require("../../../internal/utils");
var SubscriptionsApiPutSubscription2Request = /** @class */ (function (_super) {
    __extends(SubscriptionsApiPutSubscription2Request, _super);
    function SubscriptionsApiPutSubscription2Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], SubscriptionsApiPutSubscription2Request.prototype, "request", void 0);
    return SubscriptionsApiPutSubscription2Request;
}(utils_1.SpeakeasyBase));
exports.SubscriptionsApiPutSubscription2Request = SubscriptionsApiPutSubscription2Request;
var SubscriptionsApiPutSubscription2Response = /** @class */ (function (_super) {
    __extends(SubscriptionsApiPutSubscription2Response, _super);
    function SubscriptionsApiPutSubscription2Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SubscriptionsApiPutSubscription2Response.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SubscriptionsApiPutSubscription2Response.prototype, "statusCode", void 0);
    return SubscriptionsApiPutSubscription2Response;
}(utils_1.SpeakeasyBase));
exports.SubscriptionsApiPutSubscription2Response = SubscriptionsApiPutSubscription2Response;
