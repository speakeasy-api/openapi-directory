# SDK

## Overview

Positioning API accepts requests with radio network measurements and replies with corresponding location estimate. For more details and examples, see [Developer's Guide](https://developer.here.com/documentation/positioning). Cellular measurements are given in terms defined in 3GPP and 3GGP2 specifications, see the corresponsing documentation at http://www.3gpp.org.

Breaking changes from v1:
  - JSON fields
    `altaccuracy`, `baselat`, `baselng`, `cellparams`, `pilotpower`, `pnoffset`, `powrx`, `rxlevel`,
    have been deprecated and replaced with
    `altAccuracy`, `baseLat`, `baseLng`, `cellParams`, `pilotPower`, `pnOffset`, `rss`, `rxLevel`
    respectively.
  - Dependent parameters combined as a subobject.
    - CDMA, GSM, WCDMA, TD-SCDMA and LTE local identification parameters for serving cell moved under `localId` property.
    - GSM neighbor global ID: `lac` and `cid` for neighbor cell moved under `globalIdentity` property.


### Available Operations

