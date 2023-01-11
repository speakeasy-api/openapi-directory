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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDocumentWithWebHookResponse = exports.GetDocumentWithWebHookRequest = exports.GetDocumentWithWebHook200ApplicationJson = exports.GetDocumentWithWebHook200ApplicationJsonProvenance = exports.GetDocumentWithWebHook200ApplicationJsonMetrics = exports.GetDocumentWithWebHook200ApplicationJsonExplanation = exports.GetDocumentWithWebHook200ApplicationJsonExplanationTypeEnum = exports.GetDocumentWithWebHook200ApplicationJsonExplanationOpEnum = exports.GetDocumentWithWebHook200ApplicationJsonExplanationNode = exports.GetDocumentWithWebHook200ApplicationJsonExplanationNodeTerms = exports.GetDocumentWithWebHook200ApplicationJsonExplanationLocals = exports.GetDocumentWithWebHook200ApplicationJsonExplanationLocalsValue = exports.GetDocumentWithWebHook200ApplicationJsonExplanationLocalsKey = exports.GetDocumentWithWebHookQueryParams = exports.GetDocumentWithWebHookPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetDocumentWithWebHookPathParams = /** @class */ (function (_super) {
    __extends(GetDocumentWithWebHookPathParams, _super);
    function GetDocumentWithWebHookPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=path" }),
        __metadata("design:type", String)
    ], GetDocumentWithWebHookPathParams.prototype, "path", void 0);
    return GetDocumentWithWebHookPathParams;
}(utils_1.SpeakeasyBase));
exports.GetDocumentWithWebHookPathParams = GetDocumentWithWebHookPathParams;
var GetDocumentWithWebHookQueryParams = /** @class */ (function (_super) {
    __extends(GetDocumentWithWebHookQueryParams, _super);
    function GetDocumentWithWebHookQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pretty" }),
        __metadata("design:type", Boolean)
    ], GetDocumentWithWebHookQueryParams.prototype, "pretty", void 0);
    return GetDocumentWithWebHookQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDocumentWithWebHookQueryParams = GetDocumentWithWebHookQueryParams;
var GetDocumentWithWebHook200ApplicationJsonExplanationLocalsKey = /** @class */ (function (_super) {
    __extends(GetDocumentWithWebHook200ApplicationJsonExplanationLocalsKey, _super);
    function GetDocumentWithWebHook200ApplicationJsonExplanationLocalsKey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetDocumentWithWebHook200ApplicationJsonExplanationLocalsKey.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GetDocumentWithWebHook200ApplicationJsonExplanationLocalsKey.prototype, "value", void 0);
    return GetDocumentWithWebHook200ApplicationJsonExplanationLocalsKey;
}(utils_1.SpeakeasyBase));
exports.GetDocumentWithWebHook200ApplicationJsonExplanationLocalsKey = GetDocumentWithWebHook200ApplicationJsonExplanationLocalsKey;
var GetDocumentWithWebHook200ApplicationJsonExplanationLocalsValue = /** @class */ (function (_super) {
    __extends(GetDocumentWithWebHook200ApplicationJsonExplanationLocalsValue, _super);
    function GetDocumentWithWebHook200ApplicationJsonExplanationLocalsValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetDocumentWithWebHook200ApplicationJsonExplanationLocalsValue.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GetDocumentWithWebHook200ApplicationJsonExplanationLocalsValue.prototype, "value", void 0);
    return GetDocumentWithWebHook200ApplicationJsonExplanationLocalsValue;
}(utils_1.SpeakeasyBase));
exports.GetDocumentWithWebHook200ApplicationJsonExplanationLocalsValue = GetDocumentWithWebHook200ApplicationJsonExplanationLocalsValue;
var GetDocumentWithWebHook200ApplicationJsonExplanationLocals = /** @class */ (function (_super) {
    __extends(GetDocumentWithWebHook200ApplicationJsonExplanationLocals, _super);
    function GetDocumentWithWebHook200ApplicationJsonExplanationLocals() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", GetDocumentWithWebHook200ApplicationJsonExplanationLocalsKey)
    ], GetDocumentWithWebHook200ApplicationJsonExplanationLocals.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", GetDocumentWithWebHook200ApplicationJsonExplanationLocalsValue)
    ], GetDocumentWithWebHook200ApplicationJsonExplanationLocals.prototype, "value", void 0);
    return GetDocumentWithWebHook200ApplicationJsonExplanationLocals;
}(utils_1.SpeakeasyBase));
exports.GetDocumentWithWebHook200ApplicationJsonExplanationLocals = GetDocumentWithWebHook200ApplicationJsonExplanationLocals;
var GetDocumentWithWebHook200ApplicationJsonExplanationNodeTerms = /** @class */ (function (_super) {
    __extends(GetDocumentWithWebHook200ApplicationJsonExplanationNodeTerms, _super);
    function GetDocumentWithWebHook200ApplicationJsonExplanationNodeTerms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetDocumentWithWebHook200ApplicationJsonExplanationNodeTerms.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GetDocumentWithWebHook200ApplicationJsonExplanationNodeTerms.prototype, "value", void 0);
    return GetDocumentWithWebHook200ApplicationJsonExplanationNodeTerms;
}(utils_1.SpeakeasyBase));
exports.GetDocumentWithWebHook200ApplicationJsonExplanationNodeTerms = GetDocumentWithWebHook200ApplicationJsonExplanationNodeTerms;
// GetDocumentWithWebHook200ApplicationJsonExplanationNode
/**
 * The AST element associated with the evaluation step.
 * https://godoc.org/github.com/open-policy-agent/opa/ast - AST
**/
var GetDocumentWithWebHook200ApplicationJsonExplanationNode = /** @class */ (function (_super) {
    __extends(GetDocumentWithWebHook200ApplicationJsonExplanationNode, _super);
    function GetDocumentWithWebHook200ApplicationJsonExplanationNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=index" }),
        __metadata("design:type", Number)
    ], GetDocumentWithWebHook200ApplicationJsonExplanationNode.prototype, "index", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=terms", elemType: GetDocumentWithWebHook200ApplicationJsonExplanationNodeTerms }),
        __metadata("design:type", Array)
    ], GetDocumentWithWebHook200ApplicationJsonExplanationNode.prototype, "terms", void 0);
    return GetDocumentWithWebHook200ApplicationJsonExplanationNode;
}(utils_1.SpeakeasyBase));
exports.GetDocumentWithWebHook200ApplicationJsonExplanationNode = GetDocumentWithWebHook200ApplicationJsonExplanationNode;
var GetDocumentWithWebHook200ApplicationJsonExplanationOpEnum;
(function (GetDocumentWithWebHook200ApplicationJsonExplanationOpEnum) {
    GetDocumentWithWebHook200ApplicationJsonExplanationOpEnum["Enter"] = "enter";
    GetDocumentWithWebHook200ApplicationJsonExplanationOpEnum["Exit"] = "exit";
    GetDocumentWithWebHook200ApplicationJsonExplanationOpEnum["Eval"] = "eval";
    GetDocumentWithWebHook200ApplicationJsonExplanationOpEnum["Fail"] = "fail";
    GetDocumentWithWebHook200ApplicationJsonExplanationOpEnum["Redo"] = "redo";
})(GetDocumentWithWebHook200ApplicationJsonExplanationOpEnum = exports.GetDocumentWithWebHook200ApplicationJsonExplanationOpEnum || (exports.GetDocumentWithWebHook200ApplicationJsonExplanationOpEnum = {}));
var GetDocumentWithWebHook200ApplicationJsonExplanationTypeEnum;
(function (GetDocumentWithWebHook200ApplicationJsonExplanationTypeEnum) {
    GetDocumentWithWebHook200ApplicationJsonExplanationTypeEnum["Expr"] = "expr";
    GetDocumentWithWebHook200ApplicationJsonExplanationTypeEnum["Rule"] = "rule";
    GetDocumentWithWebHook200ApplicationJsonExplanationTypeEnum["Body"] = "body";
})(GetDocumentWithWebHook200ApplicationJsonExplanationTypeEnum = exports.GetDocumentWithWebHook200ApplicationJsonExplanationTypeEnum || (exports.GetDocumentWithWebHook200ApplicationJsonExplanationTypeEnum = {}));
var GetDocumentWithWebHook200ApplicationJsonExplanation = /** @class */ (function (_super) {
    __extends(GetDocumentWithWebHook200ApplicationJsonExplanation, _super);
    function GetDocumentWithWebHook200ApplicationJsonExplanation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=locals", elemType: GetDocumentWithWebHook200ApplicationJsonExplanationLocals }),
        __metadata("design:type", Array)
    ], GetDocumentWithWebHook200ApplicationJsonExplanation.prototype, "locals", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=node" }),
        __metadata("design:type", GetDocumentWithWebHook200ApplicationJsonExplanationNode)
    ], GetDocumentWithWebHook200ApplicationJsonExplanation.prototype, "node", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=op" }),
        __metadata("design:type", String)
    ], GetDocumentWithWebHook200ApplicationJsonExplanation.prototype, "op", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parent_id" }),
        __metadata("design:type", Number)
    ], GetDocumentWithWebHook200ApplicationJsonExplanation.prototype, "parentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=query_id" }),
        __metadata("design:type", Number)
    ], GetDocumentWithWebHook200ApplicationJsonExplanation.prototype, "queryId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetDocumentWithWebHook200ApplicationJsonExplanation.prototype, "type", void 0);
    return GetDocumentWithWebHook200ApplicationJsonExplanation;
}(utils_1.SpeakeasyBase));
exports.GetDocumentWithWebHook200ApplicationJsonExplanation = GetDocumentWithWebHook200ApplicationJsonExplanation;
var GetDocumentWithWebHook200ApplicationJsonMetrics = /** @class */ (function (_super) {
    __extends(GetDocumentWithWebHook200ApplicationJsonMetrics, _super);
    function GetDocumentWithWebHook200ApplicationJsonMetrics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=counter_server_query_cache_hit" }),
        __metadata("design:type", Number)
    ], GetDocumentWithWebHook200ApplicationJsonMetrics.prototype, "counterServerQueryCacheHit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_query_compile_stage_build_comprehension_index_ns" }),
        __metadata("design:type", Number)
    ], GetDocumentWithWebHook200ApplicationJsonMetrics.prototype, "timerQueryCompileStageBuildComprehensionIndexNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_query_compile_stage_check_safety_ns" }),
        __metadata("design:type", Number)
    ], GetDocumentWithWebHook200ApplicationJsonMetrics.prototype, "timerQueryCompileStageCheckSafetyNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_query_compile_stage_check_types_ns" }),
        __metadata("design:type", Number)
    ], GetDocumentWithWebHook200ApplicationJsonMetrics.prototype, "timerQueryCompileStageCheckTypesNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_query_compile_stage_check_undefined_funcs_ns" }),
        __metadata("design:type", Number)
    ], GetDocumentWithWebHook200ApplicationJsonMetrics.prototype, "timerQueryCompileStageCheckUndefinedFuncsNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_query_compile_stage_check_unsafe_builtins_ns" }),
        __metadata("design:type", Number)
    ], GetDocumentWithWebHook200ApplicationJsonMetrics.prototype, "timerQueryCompileStageCheckUnsafeBuiltinsNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_query_compile_stage_resolve_refs_ns" }),
        __metadata("design:type", Number)
    ], GetDocumentWithWebHook200ApplicationJsonMetrics.prototype, "timerQueryCompileStageResolveRefsNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_query_compile_stage_rewrite_comprehension_terms_ns" }),
        __metadata("design:type", Number)
    ], GetDocumentWithWebHook200ApplicationJsonMetrics.prototype, "timerQueryCompileStageRewriteComprehensionTermsNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_query_compile_stage_rewrite_dynamic_terms_ns" }),
        __metadata("design:type", Number)
    ], GetDocumentWithWebHook200ApplicationJsonMetrics.prototype, "timerQueryCompileStageRewriteDynamicTermsNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_query_compile_stage_rewrite_expr_terms_ns" }),
        __metadata("design:type", Number)
    ], GetDocumentWithWebHook200ApplicationJsonMetrics.prototype, "timerQueryCompileStageRewriteExprTermsNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_query_compile_stage_rewrite_local_vars_ns" }),
        __metadata("design:type", Number)
    ], GetDocumentWithWebHook200ApplicationJsonMetrics.prototype, "timerQueryCompileStageRewriteLocalVarsNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_query_compile_stage_rewrite_to_capture_value_ns" }),
        __metadata("design:type", Number)
    ], GetDocumentWithWebHook200ApplicationJsonMetrics.prototype, "timerQueryCompileStageRewriteToCaptureValueNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_query_compile_stage_rewrite_with_values_ns" }),
        __metadata("design:type", Number)
    ], GetDocumentWithWebHook200ApplicationJsonMetrics.prototype, "timerQueryCompileStageRewriteWithValuesNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_rego_input_parse_ns" }),
        __metadata("design:type", Number)
    ], GetDocumentWithWebHook200ApplicationJsonMetrics.prototype, "timerRegoInputParseNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_rego_module_compile_ns" }),
        __metadata("design:type", Number)
    ], GetDocumentWithWebHook200ApplicationJsonMetrics.prototype, "timerRegoModuleCompileNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_rego_module_parse_ns" }),
        __metadata("design:type", Number)
    ], GetDocumentWithWebHook200ApplicationJsonMetrics.prototype, "timerRegoModuleParseNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_rego_query_compile_ns" }),
        __metadata("design:type", Number)
    ], GetDocumentWithWebHook200ApplicationJsonMetrics.prototype, "timerRegoQueryCompileNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_rego_query_eval_ns" }),
        __metadata("design:type", Number)
    ], GetDocumentWithWebHook200ApplicationJsonMetrics.prototype, "timerRegoQueryEvalNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_rego_query_parse_ns" }),
        __metadata("design:type", Number)
    ], GetDocumentWithWebHook200ApplicationJsonMetrics.prototype, "timerRegoQueryParseNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_server_handler_ns" }),
        __metadata("design:type", Number)
    ], GetDocumentWithWebHook200ApplicationJsonMetrics.prototype, "timerServerHandlerNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_server_read_bytes_ns" }),
        __metadata("design:type", Number)
    ], GetDocumentWithWebHook200ApplicationJsonMetrics.prototype, "timerServerReadBytesNs", void 0);
    return GetDocumentWithWebHook200ApplicationJsonMetrics;
}(utils_1.SpeakeasyBase));
exports.GetDocumentWithWebHook200ApplicationJsonMetrics = GetDocumentWithWebHook200ApplicationJsonMetrics;
var GetDocumentWithWebHook200ApplicationJsonProvenance = /** @class */ (function (_super) {
    __extends(GetDocumentWithWebHook200ApplicationJsonProvenance, _super);
    function GetDocumentWithWebHook200ApplicationJsonProvenance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=build_commit" }),
        __metadata("design:type", String)
    ], GetDocumentWithWebHook200ApplicationJsonProvenance.prototype, "buildCommit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=build_hostname" }),
        __metadata("design:type", String)
    ], GetDocumentWithWebHook200ApplicationJsonProvenance.prototype, "buildHostname", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=build_timestamp" }),
        __metadata("design:type", String)
    ], GetDocumentWithWebHook200ApplicationJsonProvenance.prototype, "buildTimestamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bundles" }),
        __metadata("design:type", Object)
    ], GetDocumentWithWebHook200ApplicationJsonProvenance.prototype, "bundles", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], GetDocumentWithWebHook200ApplicationJsonProvenance.prototype, "version", void 0);
    return GetDocumentWithWebHook200ApplicationJsonProvenance;
}(utils_1.SpeakeasyBase));
exports.GetDocumentWithWebHook200ApplicationJsonProvenance = GetDocumentWithWebHook200ApplicationJsonProvenance;
var GetDocumentWithWebHook200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDocumentWithWebHook200ApplicationJson, _super);
    function GetDocumentWithWebHook200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=explanation", elemType: GetDocumentWithWebHook200ApplicationJsonExplanation }),
        __metadata("design:type", Array)
    ], GetDocumentWithWebHook200ApplicationJson.prototype, "explanation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metrics" }),
        __metadata("design:type", GetDocumentWithWebHook200ApplicationJsonMetrics)
    ], GetDocumentWithWebHook200ApplicationJson.prototype, "metrics", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=provenance" }),
        __metadata("design:type", GetDocumentWithWebHook200ApplicationJsonProvenance)
    ], GetDocumentWithWebHook200ApplicationJson.prototype, "provenance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", Array)
    ], GetDocumentWithWebHook200ApplicationJson.prototype, "result", void 0);
    return GetDocumentWithWebHook200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetDocumentWithWebHook200ApplicationJson = GetDocumentWithWebHook200ApplicationJson;
var GetDocumentWithWebHookRequest = /** @class */ (function (_super) {
    __extends(GetDocumentWithWebHookRequest, _super);
    function GetDocumentWithWebHookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDocumentWithWebHookPathParams)
    ], GetDocumentWithWebHookRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDocumentWithWebHookQueryParams)
    ], GetDocumentWithWebHookRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-yaml" }),
        __metadata("design:type", Uint8Array)
    ], GetDocumentWithWebHookRequest.prototype, "request", void 0);
    return GetDocumentWithWebHookRequest;
}(utils_1.SpeakeasyBase));
exports.GetDocumentWithWebHookRequest = GetDocumentWithWebHookRequest;
var GetDocumentWithWebHookResponse = /** @class */ (function (_super) {
    __extends(GetDocumentWithWebHookResponse, _super);
    function GetDocumentWithWebHookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.FourHundred)
    ], GetDocumentWithWebHookResponse.prototype, "fourHundred", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.FourHundredAndFour)
    ], GetDocumentWithWebHookResponse.prototype, "fourHundredAndFour", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDocumentWithWebHookResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDocumentWithWebHookResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDocumentWithWebHook200ApplicationJson)
    ], GetDocumentWithWebHookResponse.prototype, "getDocumentWithWebHook200ApplicationJSONObject", void 0);
    return GetDocumentWithWebHookResponse;
}(utils_1.SpeakeasyBase));
exports.GetDocumentWithWebHookResponse = GetDocumentWithWebHookResponse;
