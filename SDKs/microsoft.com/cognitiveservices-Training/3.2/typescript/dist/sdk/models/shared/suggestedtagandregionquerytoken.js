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
exports.SuggestedTagAndRegionQueryToken = exports.SuggestedTagAndRegionQueryTokenSortByEnum = void 0;
var utils_1 = require("../../../internal/utils");
var SuggestedTagAndRegionQueryTokenSortByEnum;
(function (SuggestedTagAndRegionQueryTokenSortByEnum) {
    SuggestedTagAndRegionQueryTokenSortByEnum["UncertaintyAscending"] = "UncertaintyAscending";
    SuggestedTagAndRegionQueryTokenSortByEnum["UncertaintyDescending"] = "UncertaintyDescending";
})(SuggestedTagAndRegionQueryTokenSortByEnum = exports.SuggestedTagAndRegionQueryTokenSortByEnum || (exports.SuggestedTagAndRegionQueryTokenSortByEnum = {}));
// SuggestedTagAndRegionQueryToken
/**
 * Contains properties we need to fetch suggested tags for. For the first call, Session and continuation set to null.
 * Then on subsequent calls, uses the session/continuation from the previous SuggestedTagAndRegionQuery result to fetch additional results.
**/
var SuggestedTagAndRegionQueryToken = /** @class */ (function (_super) {
    __extends(SuggestedTagAndRegionQueryToken, _super);
    function SuggestedTagAndRegionQueryToken() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=continuation, form, name=continuation;" }),
        __metadata("design:type", String)
    ], SuggestedTagAndRegionQueryToken.prototype, "continuation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maxCount, form, name=maxCount;" }),
        __metadata("design:type", Number)
    ], SuggestedTagAndRegionQueryToken.prototype, "maxCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=session, form, name=session;" }),
        __metadata("design:type", String)
    ], SuggestedTagAndRegionQueryToken.prototype, "session", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sortBy, form, name=sortBy;" }),
        __metadata("design:type", String)
    ], SuggestedTagAndRegionQueryToken.prototype, "sortBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tagIds, form, name=tagIds;" }),
        __metadata("design:type", Array)
    ], SuggestedTagAndRegionQueryToken.prototype, "tagIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=threshold, form, name=threshold;" }),
        __metadata("design:type", Number)
    ], SuggestedTagAndRegionQueryToken.prototype, "threshold", void 0);
    return SuggestedTagAndRegionQueryToken;
}(utils_1.SpeakeasyBase));
exports.SuggestedTagAndRegionQueryToken = SuggestedTagAndRegionQueryToken;
