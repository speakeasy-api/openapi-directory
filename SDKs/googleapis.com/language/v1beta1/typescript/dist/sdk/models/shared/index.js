"use strict";
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./altenum"), exports);
__exportStar(require("./analyzeentitiesrequest"), exports);
__exportStar(require("./analyzeentitiesresponse"), exports);
__exportStar(require("./analyzesentimentrequest"), exports);
__exportStar(require("./analyzesentimentresponse"), exports);
__exportStar(require("./analyzesyntaxrequest"), exports);
__exportStar(require("./analyzesyntaxresponse"), exports);
__exportStar(require("./annotatetextrequest"), exports);
__exportStar(require("./annotatetextresponse"), exports);
__exportStar(require("./dependencyedge"), exports);
__exportStar(require("./document"), exports);
__exportStar(require("./entity"), exports);
__exportStar(require("./entitymention"), exports);
__exportStar(require("./features"), exports);
__exportStar(require("./partofspeech"), exports);
__exportStar(require("./security"), exports);
__exportStar(require("./sentence"), exports);
__exportStar(require("./sentiment"), exports);
__exportStar(require("./textspan"), exports);
__exportStar(require("./token"), exports);
__exportStar(require("./xgafvenum"), exports);
