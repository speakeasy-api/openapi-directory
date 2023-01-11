"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.ServerList = void 0;
var axios_1 = __importDefault(require("axios"));
var categoryalbums_1 = require("./categoryalbums");
var categoryartists_1 = require("./categoryartists");
var categorybrowse_1 = require("./categorybrowse");
var categoryepisodes_1 = require("./categoryepisodes");
var categoryfollow_1 = require("./categoryfollow");
var categorylibrary_1 = require("./categorylibrary");
var categorymarkets_1 = require("./categorymarkets");
var categorypersonalization_1 = require("./categorypersonalization");
var categoryplayer_1 = require("./categoryplayer");
var categoryplaylists_1 = require("./categoryplaylists");
var categorysearch_1 = require("./categorysearch");
var categoryshows_1 = require("./categoryshows");
var categorytracks_1 = require("./categorytracks");
var categoryusersprofile_1 = require("./categoryusersprofile");
exports.ServerList = [
    "https://api.spotify.com/v1",
];
/* SDK Documentation: https://developer.spotify.com/documentation/web-api/reference - Find more info on the official Spotify Web API Reference*/
var SDK = /** @class */ (function () {
    function SDK(props) {
        var _a, _b;
        this._language = "typescript";
        this._sdkVersion = "0.0.1";
        this._genVersion = "internal";
        this._serverURL = (_a = props.serverUrl) !== null && _a !== void 0 ? _a : exports.ServerList[0];
        this._defaultClient = (_b = props.defaultClient) !== null && _b !== void 0 ? _b : axios_1.default.create({ baseURL: this._serverURL });
        this._securityClient = this._defaultClient;
        this.categoryAlbums = new categoryalbums_1.CategoryAlbums(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.categoryArtists = new categoryartists_1.CategoryArtists(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.categoryBrowse = new categorybrowse_1.CategoryBrowse(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.categoryEpisodes = new categoryepisodes_1.CategoryEpisodes(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.categoryFollow = new categoryfollow_1.CategoryFollow(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.categoryLibrary = new categorylibrary_1.CategoryLibrary(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.categoryMarkets = new categorymarkets_1.CategoryMarkets(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.categoryPersonalization = new categorypersonalization_1.CategoryPersonalization(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.categoryPlayer = new categoryplayer_1.CategoryPlayer(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.categoryPlaylists = new categoryplaylists_1.CategoryPlaylists(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.categorySearch = new categorysearch_1.CategorySearch(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.categoryShows = new categoryshows_1.CategoryShows(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.categoryTracks = new categorytracks_1.CategoryTracks(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.categoryUsersProfile = new categoryusersprofile_1.CategoryUsersProfile(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
exports.SDK = SDK;
