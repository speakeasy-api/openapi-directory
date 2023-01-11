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
__exportStar(require("./cargogetroutefromdateproductcodebyoriginanddestinationget"), exports);
__exportStar(require("./cargoshipmenttrackingbyawbprefixandawbnumberget"), exports);
__exportStar(require("./offersloungesbylocationget"), exports);
__exportStar(require("./offersseatmapsdestinationdatecabinclassbyflightnumberandoriginget"), exports);
__exportStar(require("./operationsflightstatusarrivalsbyairportcodeandfromdatetimeget"), exports);
__exportStar(require("./operationsflightstatusbyflightnumberanddateget"), exports);
__exportStar(require("./operationsflightstatusdeparturesbyairportcodeandfromdatetimeget"), exports);
__exportStar(require("./operationsflightstatusroutedatebyoriginanddestinationget"), exports);
__exportStar(require("./operationsschedulesfromdatetimebyoriginanddestinationget"), exports);
__exportStar(require("./referencesaircraftbyaircraftcodeget"), exports);
__exportStar(require("./referencesairlinesbyairlinecodeget"), exports);
__exportStar(require("./referencesairportsbyairportcodeget"), exports);
__exportStar(require("./referencesairportsnearestbylatitudeandlongitudeget"), exports);
__exportStar(require("./referencescitiesbycitycodeget"), exports);
__exportStar(require("./referencescountriesbycountrycodeget"), exports);
