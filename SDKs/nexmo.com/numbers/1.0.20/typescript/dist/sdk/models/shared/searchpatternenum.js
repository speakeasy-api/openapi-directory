"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchPatternEnum = void 0;
var SearchPatternEnum;
(function (SearchPatternEnum) {
    SearchPatternEnum["Sms"] = "SMS";
    SearchPatternEnum["Voice"] = "VOICE";
    SearchPatternEnum["SmsVoice"] = "SMS,VOICE";
    SearchPatternEnum["Mms"] = "MMS";
    SearchPatternEnum["SmsMms"] = "SMS,MMS";
    SearchPatternEnum["VoiceMms"] = "VOICE,MMS";
    SearchPatternEnum["SmsMmsVoice"] = "SMS,MMS,VOICE";
})(SearchPatternEnum = exports.SearchPatternEnum || (exports.SearchPatternEnum = {}));
