"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsentStatusEnum = void 0;
var ConsentStatusEnum;
(function (ConsentStatusEnum) {
    ConsentStatusEnum["Received"] = "received";
    ConsentStatusEnum["Rejected"] = "rejected";
    ConsentStatusEnum["Valid"] = "valid";
    ConsentStatusEnum["RevokedByPsu"] = "revokedByPsu";
    ConsentStatusEnum["Expired"] = "expired";
    ConsentStatusEnum["TerminatedByTpp"] = "terminatedByTpp";
    ConsentStatusEnum["PartiallyAuthorised"] = "partiallyAuthorised";
})(ConsentStatusEnum = exports.ConsentStatusEnum || (exports.ConsentStatusEnum = {}));
