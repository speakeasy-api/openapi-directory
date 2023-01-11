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
exports.Span = exports.SpanSpanKindEnum = void 0;
var utils_1 = require("../../../internal/utils");
var attributes_1 = require("./attributes");
var truncatablestring_1 = require("./truncatablestring");
var links_1 = require("./links");
var stacktrace_1 = require("./stacktrace");
var status_1 = require("./status");
var timeevents_1 = require("./timeevents");
var SpanSpanKindEnum;
(function (SpanSpanKindEnum) {
    SpanSpanKindEnum["SpanKindUnspecified"] = "SPAN_KIND_UNSPECIFIED";
    SpanSpanKindEnum["Internal"] = "INTERNAL";
    SpanSpanKindEnum["Server"] = "SERVER";
    SpanSpanKindEnum["Client"] = "CLIENT";
    SpanSpanKindEnum["Producer"] = "PRODUCER";
    SpanSpanKindEnum["Consumer"] = "CONSUMER";
})(SpanSpanKindEnum = exports.SpanSpanKindEnum || (exports.SpanSpanKindEnum = {}));
// Span
/**
 * A span represents a single operation within a trace. Spans can be nested to form a trace tree. Often, a trace contains a root span that describes the end-to-end latency, and one or more subspans for its sub-operations. A trace can also contain multiple root spans, or none at all. Spans do not need to be contiguous—there might be gaps or overlaps between spans in a trace.
**/
var Span = /** @class */ (function (_super) {
    __extends(Span, _super);
    function Span() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attributes" }),
        __metadata("design:type", attributes_1.Attributes)
    ], Span.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=childSpanCount" }),
        __metadata("design:type", Number)
    ], Span.prototype, "childSpanCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayName" }),
        __metadata("design:type", truncatablestring_1.TruncatableString)
    ], Span.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], Span.prototype, "endTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", links_1.Links)
    ], Span.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Span.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parentSpanId" }),
        __metadata("design:type", String)
    ], Span.prototype, "parentSpanId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sameProcessAsParentSpan" }),
        __metadata("design:type", Boolean)
    ], Span.prototype, "sameProcessAsParentSpan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=spanId" }),
        __metadata("design:type", String)
    ], Span.prototype, "spanId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=spanKind" }),
        __metadata("design:type", String)
    ], Span.prototype, "spanKind", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stackTrace" }),
        __metadata("design:type", stacktrace_1.StackTrace)
    ], Span.prototype, "stackTrace", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], Span.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", status_1.Status)
    ], Span.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timeEvents" }),
        __metadata("design:type", timeevents_1.TimeEvents)
    ], Span.prototype, "timeEvents", void 0);
    return Span;
}(utils_1.SpeakeasyBase));
exports.Span = Span;
