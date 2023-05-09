# domain

## Overview

A domain object contains several tenants; it can be considered a group of tenants. The PhantAuth official tenants are collected in a domain identified by `phantauth.net`.
In the `phantauth.cf` domain, you can share and register your own tenants as well.

A domain can also be used as a tenant, that is, it has an issuer endpoint and some resource endpoints. The issuer URL of the domain is in `https://phantauth.net/_{domain}` format, where `domain` is the fully qualified DNS name associated with the domain, that is, for example [https://phantauth.net/_phantauth.net](https://phantauth.net/_phantauth.net) or
[https://phantauth.net/_phantauth.cf](https://phantauth.net/_phantauth.cf). When using a default domain (phantauth.net), the domain name, that is, the URL of the default domain issuer, [https://phantauth.net/_](https://phantauth.net/_) can be omitted.

### Available Operations

* [getDomainDomainname](#getdomaindomainname) - Get a Domain

## getDomainDomainname

This endpoint allows you to get the data of a given PhantAuth domain. To use the PhantAuth services, you don't need this endpoint.
It is, therefore, mainly used for debug/diagnostic purposes in tenant customization.

Domainname is the fully qualified DNS name of the domain you get (e.g. *phantauth.net* or *phantauth.cf*).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDomainDomainnameRequest;
import org.openapis.openapi.models.operations.GetDomainDomainnameResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDomainDomainnameRequest req = new GetDomainDomainnameRequest("sapiente");            

            GetDomainDomainnameResponse res = sdk.domain.getDomainDomainname(req);

            if (res.getDomainDomainname200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
