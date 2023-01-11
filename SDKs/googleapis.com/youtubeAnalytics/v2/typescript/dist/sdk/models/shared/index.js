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
__exportStar(require("./emptyresponse"), exports);
__exportStar(require("./errorproto"), exports);
__exportStar(require("./errors"), exports);
__exportStar(require("./group"), exports);
__exportStar(require("./groupcontentdetails"), exports);
__exportStar(require("./groupitem"), exports);
__exportStar(require("./groupitemresource"), exports);
__exportStar(require("./groupsnippet"), exports);
__exportStar(require("./listgroupitemsresponse"), exports);
__exportStar(require("./listgroupsresponse"), exports);
__exportStar(require("./queryresponse"), exports);
__exportStar(require("./resulttablecolumnheader"), exports);
__exportStar(require("./security"), exports);
__exportStar(require("./xgafvenum"), exports);
