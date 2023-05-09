# SDK

## Overview

## Notes

**Tutorial demo** using this API is at [https://spinitron.com/v2-api-demo/](https://spinitron.com/v2-api-demo/). For web integration using iframes and/or JavaScript instead of an API, see [https://spinitron.github.io/v2-web-integration/](https://spinitron.github.io/v2-web-integration/).

**Your API key** is found in the Spinitron web app. Log in to Spinitron and go to *Automation & API* in the *Admin* menu.

**Authenticate** by presenting your API key using either HTTP Bearer Authorization
(preferred)

    curl -H 'Authorization: Bearer YOURAPIKEY' 'https://spinitron.com/api/spins'

or in the query parameter `access-token` (less secure owing to webserver
log files)

    curl 'https://spinitron.com/api/spins?access-token=YOURAPIKEY'

**Limit** per page of results is 20 by default and miximally 200.

**Try it out** below works to
generate example cURL requests but not to get responses from Spinitron. We
do not accept queries sent from web browsers. Copy-paste the cURL commands
and run them from your computer.

**Cache** the data you get from the API if you are using it in web or mobile integration. It's not ok to query the API on *every* page request you serve. The [demo](https://spinitron.com/v2-api-demo/) shows how easy it can be to implement a file cache.

An extension to this API with access to all stations for partner applications is available. Contact us.


### Available Operations

